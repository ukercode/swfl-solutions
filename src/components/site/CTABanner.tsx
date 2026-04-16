import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export const CTABanner = ({
  title = "Ready to Protect Your Investment?",
  description = "Schedule a free, no-obligation project assessment. Discover how true owner advocacy can save you time, money, and stress.",
}: CTABannerProps) => {
  return (
    <section className="relative bg-gradient-navy text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container-prose relative py-20 lg:py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-10 h-[2px] bg-accent" />
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Get Started</span>
          <span className="w-10 h-[2px] bg-accent" />
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold max-w-3xl mx-auto leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl mx-auto">{description}</p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent-glow hover:shadow-gold h-12 px-8"
          >
            <Link to="/contact">
              Schedule Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 px-8 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
