import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  HardHat,
  LifeBuoy,
  Handshake,
  PiggyBank,
  Award,
  Compass,
  Clock,
  ShieldCheck,
  MessageSquare,
  SearchCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABanner } from "@/components/site/CTABanner";
import heroImg from "@/assets/hero-home.jpg";

const services = [
  {
    icon: Handshake,
    title: "Owner Representation",
    desc: "We act as your dedicated advocate from conception to final walkthrough — protecting your interests and saving you time and money.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    desc: "End-to-end oversight of schedule, budget, scope, and quality — a single point of accountability you can trust.",
  },
  {
    icon: LifeBuoy,
    title: "Project Recovery",
    desc: "Stalled, over-budget, or troubled project? We diagnose the issues and execute a clear plan to bring it back on track.",
  },
  {
    icon: HardHat,
    title: "Construction Oversight",
    desc: "Independent on-site quality assurance. Permitting and inspection coordination; so the work is done right — the first time.",
  },
  {
    icon: Building2,
    title: "Pre-Construction Advisory",
    desc: "Site assessment, design review, and contractor selection to set your project up for success before ground is broken.",
  },
  {
    icon: SearchCheck,
    title: "Project Assessment",
    desc: "A thorough evaluation of your project status, cost, and time frame — so you can move forward with clarity and confidence.",
  },
];

const process = [
  { num: "01", title: "Analysis", desc: "Project budget, scope, and evaluation." },
  { num: "02", title: "Design", desc: "Architect & engineer coordination with value engineering." },
  { num: "03", title: "Coordination", desc: "Contractor bidding and scheduling." },
  { num: "04", title: "Oversight", desc: "On-site management, quality control, and reporting." },
  { num: "05", title: "Closeout", desc: "Final inspections, punch list, and warranty handoff." },
];

const advantages = [
  { icon: PiggyBank, title: "Cost Savings", desc: "Independent oversight typically saves owners 5–15% through avoided change orders, value engineering, and contractor accountability." },
  { icon: Award, title: "Expert Management", desc: "We manage oversight of your project ensuring seamless flow and completion. Working exclusively for you — not the contractor or developer." },
  { icon: Compass, title: "Direct Control", desc: "You stay informed and in command. We translate the complexities and present clear, actionable choices." },
  { icon: Clock, title: "Rapid Completion", desc: "Proactive scheduling, vendor coordination, and issue resolution keep your project moving — and on time." },
  { icon: ShieldCheck, title: "Stress Reduction", desc: "We handle the meetings, paperwork, and problem-solving so you can relax." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Regular reports, photos, and direct access. You always know exactly where your project stands." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center text-primary-foreground overflow-hidden">
        <img
          src={heroImg}
          alt="Owner representative reviewing blueprints at a Florida luxury home construction site"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container-prose relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <span className="w-10 h-[2px] bg-accent" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-accent font-medium">
                Southwest Florida
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.05] animate-fade-in-up">
              Working for You as Your{" "}
              <span className="text-accent">Owner Representative</span>
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl animate-fade-in-up">
              From feasibility to final walkthrough, SWFL Solutions protects your investment with independent expertise — exclusively on your side.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-glow hover:shadow-gold h-12 px-8 text-base"
              >
                <Link to="/contact">
                  Schedule Free Assessment <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 px-8 text-base border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services band */}
      <section className="bg-primary text-primary-foreground border-y border-accent/20">
        <div className="container-prose py-6 lg:py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm uppercase tracking-[0.18em] font-medium">
            {["Owner Representation", "Project Management", "Project Recovery", "Construction Oversight"].map(
              (item, i) => (
                <div key={item} className="flex items-center gap-8">
                  <span className="text-primary-foreground/90">{item}</span>
                  {i < 3 && <span className="text-accent hidden sm:inline">◆</span>}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose">
          <SectionHeading
            eyebrow="What We Do"
            title="Your Advocate from Vision to Completion"
            description="Construction and real estate development are too important — and too expensive — to navigate alone. Our services are built around one principle: 100% loyalty to you, the owner."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-card border border-border rounded-lg p-8 shadow-card-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                  <Icon className="w-7 h-7 text-primary group-hover:text-accent-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
                <div className="mt-6 inline-flex items-center text-sm font-medium text-accent">
                  <Link to="/services" className="inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-prose">
          <SectionHeading
            eyebrow="How We Work"
            title="A Proven, Transparent Process"
            description="Every successful project follows a disciplined path. Here's how we guide yours from concept to keys in hand."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {process.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-card border border-border rounded-lg p-6 h-full shadow-card-soft hover:shadow-elegant transition-shadow">
                  <div className="font-serif text-5xl font-bold text-accent/90 mb-3 leading-none">
                    {step.num}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-accent/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Why SWFL Solutions"
            title="The Advantage of True Owner Advocacy"
            description="When your representative answers only to you, every decision is made with your best interest in mind."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5">
                <div className="shrink-0 w-12 h-12 rounded-md bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </Layout>
  );
};

export default Index;
