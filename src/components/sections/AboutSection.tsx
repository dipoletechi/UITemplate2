import { Target, Eye, Leaf, Users, TreePine, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-10">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-6 w-1 rounded-full bg-saffron" />
          <h3 className="text-lg font-bold text-foreground">About GFRF</h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Vision */}
          <div className="rounded-lg border border-border bg-background p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Our Vision</h4>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To be a leading institution in forest research and conservation, ensuring the
              ecological balance and biodiversity of Gujarat's forests while fostering sustainable
              development and community welfare.
            </p>
          </div>

          {/* Mission */}
          <div className="rounded-lg border border-border bg-background p-6 shadow-soft">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-saffron/10">
                <Target className="h-5 w-5 text-saffron" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Our Mission</h4>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To conduct comprehensive research, implement innovative conservation strategies,
              and engage communities in protecting Gujarat's rich forest heritage while promoting
              sustainable utilization of natural resources.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: Leaf, title: "Conservation", desc: "Protecting ecosystems" },
            { icon: Users, title: "Community", desc: "Local engagement" },
            { icon: TreePine, title: "Sustainability", desc: "Responsible use" },
            { icon: Award, title: "Excellence", desc: "Research standards" },
          ].map((value) => (
            <div
              key={value.title}
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:border-saffron"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-saffron/10">
                <value.icon className="h-5 w-5 text-saffron" />
              </div>
              <div>
                <h5 className="text-sm font-semibold text-foreground">{value.title}</h5>
                <p className="text-xs text-muted-foreground">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
