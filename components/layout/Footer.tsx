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
        { label: "Maintenance Tips", href: "/maintenance-tips" },
        { label: "About DiscoverMyCar", href: "/about" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
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
                DiscoverMyCar<span className="text-blue-500">.</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              India&apos;s smartest car recommendation platform. Helping you
              discover the right car based on your lifestyle, not just specs.
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

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-xs font-medium text-slate-500">
            © {currentYear} DiscoverMyCar Technologies. Built with precision
            for the Indian market.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition-colors hover:text-white"
            >
              Twitter
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition-colors hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}