import { Facebook, Twitter, Youtube, Instagram, ExternalLink } from "lucide-react";

const govLinks = [
  { label: "Gujarat Government", href: "https://gujarat.gov.in" },
  { label: "Forest Survey of India", href: "https://fsi.nic.in" },
  { label: "MoEFCC", href: "https://moef.gov.in" },
];

export function FooterSection() {
  return (
    <footer className="bg-india-green-dark text-cream">
      <div className="px-6 py-8 md:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Emblem"
                className="h-10 w-10"
              />
              <div>
                <h4 className="font-bold">GFRF</h4>
                <p className="text-xs text-cream/70">Gujarat Forest Research</p>
              </div>
            </div>
            <p className="text-sm text-cream/80">
              Committed to forest conservation and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Services", "Tenders", "Recruitment", "RTI"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-cream/80 hover:text-saffron">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="mb-3 font-semibold">Government Links</h4>
            <ul className="space-y-2 text-sm">
              {govLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cream/80 hover:text-saffron"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 font-semibold">Connect With Us</h4>
            <div className="flex gap-2">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-cream/10 transition-colors hover:bg-saffron hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-cream/60">
              Last Updated: December 11, 2024
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-india-green-light/30">
        <div className="flex flex-col items-center justify-between gap-2 px-6 py-3 text-xs md:flex-row md:px-10">
          <span className="text-cream/70">
            © {new Date().getFullYear()} GFRF. All rights reserved.
          </span>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms", "Sitemap", "Accessibility"].map((link) => (
              <a key={link} href="#" className="text-cream/70 hover:text-saffron">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
