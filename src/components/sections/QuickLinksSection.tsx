import {
  FileText,
  Download,
  CreditCard,
  MessageSquare,
  TreePine,
  Users,
  BookOpen,
  AlertTriangle,
} from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Grievance Portal", color: "bg-saffron/10 text-saffron" },
  { icon: FileText, title: "RTI Services", color: "bg-primary/10 text-primary" },
  { icon: Download, title: "Downloads", color: "bg-india-green-light/10 text-india-green-light" },
  { icon: CreditCard, title: "Online Payment", color: "bg-saffron/10 text-saffron" },
  { icon: TreePine, title: "Tree Census", color: "bg-primary/10 text-primary" },
  { icon: Users, title: "JFM Info", color: "bg-india-green-light/10 text-india-green-light" },
  { icon: BookOpen, title: "Publications", color: "bg-saffron/10 text-saffron" },
  { icon: AlertTriangle, title: "Fire Alerts", color: "bg-destructive/10 text-destructive" },
];

export function QuickLinksSection() {
  return (
    <section id="services" className="bg-muted py-8">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-6 w-1 rounded-full bg-saffron" />
          <h3 className="text-lg font-bold text-foreground">Quick Services</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {services.map((service) => (
            <a
              key={service.title}
              href="#"
              className="group flex flex-col items-center gap-2 rounded-lg border border-border bg-card p-4 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-medium"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${service.color}`}>
                <service.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-medium text-foreground group-hover:text-primary">
                {service.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
