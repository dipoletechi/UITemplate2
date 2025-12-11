import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted py-10">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-6 w-1 rounded-full bg-saffron" />
          <h3 className="text-lg font-bold text-foreground">Contact Us</h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Contact Cards */}
          <div className="space-y-4">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: "GFDC Complex, Sector-10A, Gandhinagar - 382010",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "1800-XXX-XXXX (Toll Free)",
              },
              {
                icon: Mail,
                title: "Email",
                content: "info@gfrf.gov.in",
              },
              {
                icon: Clock,
                title: "Office Hours",
                content: "Mon-Fri: 10AM - 6PM",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-soft"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6 shadow-soft">
              <h4 className="mb-4 font-semibold text-foreground">Send Feedback</h4>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary"
                  />
                </div>
                <select className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary">
                  <option value="">Select Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="grievance">Grievance</option>
                  <option value="feedback">Feedback</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full rounded-md border border-input bg-background p-3 text-sm outline-none focus:border-primary"
                />
                <Button className="bg-primary text-primary-foreground">
                  <Send className="mr-2 h-4 w-4" />
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
