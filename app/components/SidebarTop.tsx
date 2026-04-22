import Link from "next/link";

const navItems = [
  {
    icon: (
      <span
        style={{
          display: "block",
          width: 32,
          height: 32,
          borderRadius: "50%",
          backgroundColor: "#FFB703",
          border: "2px solid #1a1a1a",
          flexShrink: 0,
        }}
      />
    ),
    label: "About",
    href: "/about",
  },
  {
    icon: (
      <span
        style={{
          display: "block",
          width: 32,
          height: 32,
          backgroundColor: "#F44336",
          border: "2px solid #1a1a1a",
          flexShrink: 0,
        }}
      />
    ),
    label: "Works",
    href: "/about#works",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 40 40" style={{ flexShrink: 0 }}>
        <polygon
          points="20,4 38,36 2,36"
          fill="#2986CC"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Pm",
    href: "/about#pm",
  },
  {
    icon: (
      <span
        style={{
          display: "block",
          width: 32,
          height: 2,
          backgroundColor: "#1a1a1a",
          flexShrink: 0,
        }}
      />
    ),
    label: "Resume",
    href: "/about#resume",
  },
  {
    icon: (
      <span
        style={{
          display: "block",
          width: 16,
          height: 32,
          border: "2px solid #1a1a1a",
          backgroundColor: "#ffffff",
          flexShrink: 0,
        }}
      />
    ),
    label: "Contact",
    href: "/about#contact",
  },
];

export default function SidebarTop() {
  return (
    <aside
      className="fixed top-0 left-0 z-20"
      style={{ width: 201, backgroundColor: "#F2EFE9" }}
    >
      {/* Bordered content box */}
      <div className="border border-[#1a1a1a]" style={{ margin: 0 }}>
        {/* Logo */}
          <div className="flex items-center justify-center px-6" style={{ paddingTop: 54, paddingBottom: 54 }}>
            <img
              src="/images/Logo.png"
              alt="Logo"
              style={{ width: 120, height: "auto" }}
            />
          </div>

        {/* Divider */}
        <div className="border-t border-[#1a1a1a]" />

        {/* Nav */}
        <div className="flex justify-center" style={{ paddingTop: 29, paddingBottom: 29 }}>
          <nav className="flex flex-col">
            {navItems.map(({ icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="grid items-center gap-x-3 hover:opacity-60 transition-opacity"
                style={{ gridTemplateColumns: "40px 1fr", paddingTop: 15, paddingBottom: 15 }}
              >
                {/* Icon cell: 40px, centered */}
                <span className="flex items-center justify-center">
                  {icon}
                </span>
                {/* Text cell: left-aligned */}
                <span
                  className="text-left"
                  style={{
                    fontFamily: "'Blippo MN', sans-serif",
                    fontWeight: 900,
                    fontSize: 24,
                    color: "#1a1a1a",
                    lineHeight: 1,
                  }}
                >
                  {label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
