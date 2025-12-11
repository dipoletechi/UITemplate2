import { Globe, Minus, Plus, Eye, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Tricolor stripe */}
      <div className="flex h-1">
        <div className="flex-1 bg-saffron" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-india-green" />
      </div>

      {/* Top accessibility bar */}
      <div className="bg-india-green-dark text-primary-foreground">
        <div className="flex items-center justify-between px-4 py-1.5 text-xs">
          <span className="hidden md:inline">Government of Gujarat | ગુજરાત સરકાર</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <button className="rounded p-1 hover:bg-india-green" aria-label="Decrease font">
                <Minus className="h-3 w-3" />
              </button>
              <span className="px-1">A</span>
              <button className="rounded p-1 hover:bg-india-green" aria-label="Increase font">
                <Plus className="h-3 w-3" />
              </button>
              <button className="rounded p-1 hover:bg-india-green" aria-label="High contrast">
                <Eye className="h-3 w-3" />
              </button>
            </div>
            <div className="flex items-center gap-1 border-l border-india-green-light pl-3">
              <Globe className="h-3 w-3" />
              <select className="bg-transparent text-xs outline-none">
                <option value="en">English</option>
                <option value="gu">ગુજરાતી</option>
                <option value="hi">हिंदी</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-card shadow-soft">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                alt="Emblem of India"
                className="h-10 w-10"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary md:text-xl">
                Gujarat Forest Research Foundation
              </h1>
              <p className="text-xs text-muted-foreground md:text-sm">
                ગુજરાત વન સંશોધન ફાઉન્ડેશન | Government of Gujarat
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="h-9 w-40 rounded-md border border-input bg-background px-3 pr-9 text-sm outline-none focus:border-primary lg:w-56"
              />
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
