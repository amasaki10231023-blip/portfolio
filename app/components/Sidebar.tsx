import Link from "next/link";

const navItems = [
  {
    icon: <span className="inline-block w-2 h-2 rounded-full bg-[#FFB703]" />,
    label: "About",
    href: "/about",
  },
  {
    icon: <span className="inline-block w-2 h-2 bg-[#F44336]" />,
    label: "Works",
    href: "/about#works",
  },
  {
    icon: (
      <span
        className="inline-block w-0 h-0"
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderBottom: "7px solid #2986CC",
        }}
      />
    ),
    label: "Pm",
    href: "/about#pm",
  },
  {
    icon: <span className="inline-block w-3 bg-[#1a1a1a]" style={{ height: 1.5 }} />,
    label: "Resume",
    href: "/about#resume",
  },
  {
    icon: <span className="inline-block bg-[#1a1a1a]" style={{ width: 1.5, height: 12 }} />,
    label: "Contact",
    href: "/about#contact",
  },
];

export default function Sidebar() {
  return (
    <aside className="relative z-10 flex flex-col w-[220px] min-w-[220px] h-full bg-[#F2EFE9] border border-[#1a1a1a]">
      {/* Logo */}
      <div className="flex items-center justify-center py-10 px-6">
        <div className="relative w-20 h-14">
          <span
            className="absolute rounded-full bg-[#F44336]"
            style={{ width: 36, height: 36, top: 10, left: 0 }}
          />
          <span
            className="absolute rounded-full bg-[#2986CC]"
            style={{ width: 36, height: 36, top: 10, left: 20 }}
          />
          <span
            className="absolute rounded-full bg-[#FFB703]"
            style={{ width: 46, height: 46, top: 0, left: 8 }}
          />
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-6 mt-2">
        {navItems.map(({ icon, label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 py-2 hover:opacity-60 transition-opacity"
          >
            <span className="flex items-center justify-center w-4">{icon}</span>
            <span
              className="text-base tracking-wide"
              style={{
                fontFamily: "'Blippo MN', sans-serif",
                fontWeight: 900,
                color: "#1a1a1a",
              }}
            >
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
