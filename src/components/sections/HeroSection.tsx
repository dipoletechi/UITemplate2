import heroImage from "@/assets/hero-forest.jpg";
import { FileText, ArrowRight, TreePine, Shield, Leaf, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Gujarat Forest"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-india-green-dark/90 via-india-green/80 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-10 lg:px-16">
            <div className="max-w-xl animate-fade-in">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-saffron px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                <Leaf className="h-4 w-4" />
                Protecting Gujarat's Green Heritage
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Gujarat Forest Research Foundation
              </h2>
              <p className="mb-6 text-base text-white/90 md:text-lg">
                Committed to forest conservation, wildlife protection, and sustainable development
                through research and community engagement.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-saffron text-secondary-foreground hover:bg-saffron-dark">
                  <FileText className="mr-2 h-4 w-4" />
                  Lodge Grievance
                </Button>
                <Button variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-card">
        <div className="grid grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { icon: TreePine, value: "1,900+", label: "Forest Areas" },
            { icon: Shield, value: "23", label: "Sanctuaries" },
            { icon: Mountain, value: "7.55%", label: "Forest Cover" },
            { icon: Leaf, value: "674", label: "Species" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-4 md:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-saffron/10">
                <stat.icon className="h-5 w-5 text-saffron" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground md:text-xl">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
