'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const addHoverListeners = useCallback(() => {
    const cur = cursorRef.current;
    if (!cur) return;

    const onMouseEnter = () => cur.classList.add('large');
    const onMouseLeave = () => cur.classList.remove('large');

    const hoverEls = document.querySelectorAll(
      'a, button, [role="button"], #cta, #preview, .nav-links a, [data-hover]'
    );

    hoverEls.forEach(el => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });
  }, []);

  useEffect(() => {
    const cur = cursorRef.current;
    if (!cur) return;

    const onMouseMove = (e: MouseEvent) => {
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', onMouseMove);

    // 初回
    addHoverListeners();

    // クリック後・画面遷移後に再登録
    document.addEventListener('click', () => {
      setTimeout(addHoverListeners, 100);
    });

    // MutationObserverでDOM変化を監視して再登録
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, [addHoverListeners]);

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      style={{
        position: 'fixed',
        width: 10,
        height: 10,
        backgroundColor: '#2986CC',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'transform 0.13s cubic-bezier(.25,.46,.45,.94), background-color 0.13s',
      }}
    />
  );
}
