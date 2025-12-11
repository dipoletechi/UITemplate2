import { Calendar, ArrowRight, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    date: "Dec 10, 2024",
    title: "World Forest Day Celebration 2024",
    category: "Event",
  },
  {
    date: "Dec 05, 2024",
    title: "New Wildlife Sanctuary Proposed in Kutch",
    category: "Announcement",
  },
  {
    date: "Nov 28, 2024",
    title: "Research Grant Applications Open",
    category: "Notice",
  },
  {
    date: "Nov 20, 2024",
    title: "Recruitment Notification - Forest Guards",
    category: "Recruitment",
  },
];

const events = [
  { date: "15", month: "Dec", title: "Van Mahotsav" },
  { date: "22", month: "Dec", title: "Wildlife Week" },
  { date: "01", month: "Jan", title: "Tree Plantation" },
];

export function NewsSection() {
  return (
    <section id="news" className="bg-muted py-10">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* News */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-saffron" />
              <Bell className="h-5 w-5 text-saffron" />
              <h3 className="text-lg font-bold text-foreground">Latest News</h3>
            </div>

            <div className="space-y-3">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 shadow-soft transition-colors hover:border-saffron"
                >
                  <div className="shrink-0 rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {item.category}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary">
                      {item.title}
                    </h4>
                    <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <Button variant="outline" size="sm" className="mt-4">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Events */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-primary" />
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Events</h3>
            </div>

            <div className="rounded-lg border border-border bg-card p-4 shadow-soft">
              <div className="space-y-3">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-md bg-muted p-3"
                  >
                    <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <span className="text-base font-bold leading-none">{event.date}</span>
                      <span className="text-[10px] uppercase">{event.month}</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{event.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
