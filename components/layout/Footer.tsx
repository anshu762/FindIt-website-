import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Navigation",
      links: [
        { label: "Browse Cars", href: "/cars" },
        { label: "Compare Tool", href: "/compare" },
        { label: "Take Quiz", href: "/quiz" },
      ],
    },
    {
      title: "Information",
      links: [
        { label: "How it Works", href: "/#how-it-works" },
        { label: "Maintenance Tips", href: "#" },
        { label: "About FindIt", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black tracking-tighter text-white">
                FindIt<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              India&apos;s smartest car recommendation platform. Helping you find the right car based on your lifestyle, not just specs.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="space-y-5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © {currentYear} FindIt Technologies. Built with precision for the Indian market.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
