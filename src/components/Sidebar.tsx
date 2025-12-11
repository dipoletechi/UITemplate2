import { useState } from "react";
import {
  Home,
  Building2,
  FileText,
  Briefcase,
  Image,
  Newspaper,
  Phone,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  TreePine,
  Users,
  Download,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", icon: Home, href: "#home" },
  {
    label: "About Us",
    icon: Building2,
    href: "#about",
    children: [
      { label: "Vision & Mission", href: "#vision" },
      { label: "Organization", href: "#organization" },
      { label: "Functions", href: "#functions" },
    ],
  },
  {
    label: "Department",
    icon: TreePine,
    href: "#department",
    children: [
      { label: "Structure", href: "#structure" },
      { label: "Officers", href: "#officers" },
      { label: "Offices", href: "#offices" },
    ],
  },
  {
    label: "Policies & Rules",
    icon: FileText,
    href: "#policies",
    children: [
      { label: "Acts & Rules", href: "#acts" },
      { label: "Notifications", href: "#notifications" },
      { label: "Circulars", href: "#circulars" },
    ],
  },
  { label: "Services", icon: Briefcase, href: "#services" },
  { label: "Gallery", icon: Image, href: "#gallery" },
  { label: "News & Events", icon: Newspaper, href: "#news" },
  { label: "Downloads", icon: Download, href: "#downloads" },
  { label: "Grievance", icon: MessageSquare, href: "#grievance" },
  { label: "Contact Us", icon: Phone, href: "#contact" },
  { label: "FAQs", icon: HelpCircle, href: "#faqs" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/50 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-sidebar transition-transform duration-300 lg:sticky lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-foreground/10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Emblem"
                className="h-7 w-7"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-sidebar-foreground">GFRF</h2>
              <p className="text-xs text-sidebar-foreground/70">Gujarat Forest</p>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="rounded-md p-1 text-sidebar-foreground hover:bg-sidebar-accent lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </span>
                      {expandedItems.includes(item.label) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {expandedItems.includes(item.label) && (
                      <ul className="ml-7 mt-1 space-y-1 border-l border-sidebar-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              className="block rounded-md px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t border-sidebar-border p-4">
          <div className="flex items-center gap-2 text-xs text-sidebar-foreground/70">
            <Users className="h-4 w-4" />
            <span>Visitors: 1,234,567</span>
          </div>
        </div>
      </aside>

      {/* Mobile toggle button */}
      <button
        onClick={onToggle}
        className="fixed bottom-4 left-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-medium lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  );
}
