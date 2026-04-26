import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { CTABanner } from "@/components/site/CTABanner";
import heroImg from "@/assets/hero-services.jpg";
import imgOwnerRep from "@/assets/service-owner-rep.jpg";
import imgPM from "@/assets/service-pm.jpg";
import imgRecovery from "@/assets/service-recovery.jpg";
import imgOversight from "@/assets/service-oversight.jpg";

const services = [
  {
    id: "owner-representation",
    eyebrow: "Service 01",
    title: "Owner Representation",
    image: imgOwnerRep,
    intro:
      "We are your single, trusted point of contact through every phase of your project — making sure your interests come first, every time.",
    body:
      "An Owner Representative is exclusively your advocate. We coordinate architects, engineers, contractors, and consultants so you don't have to. From design review to final closeout, we translate the technical, manage the politics, and make sure decisions reflect your goals — not the agenda of any vendor.",
    bullets: [
      "Independent advocacy, 100% loyalty to the owner",
      "Single point of contact for the entire project team",
      "Decision support with clear options and trade-offs",
      "Document, contract, and change-order review",
      "Regular status reports and direct owner communication",
    ],
  },
  {
    id: "project-management",
    eyebrow: "Service 02",
    title: "Project Management",
    image: imgPM,
    intro:
      "Comprehensive end-to-end management of schedule, budget, scope, and quality — the discipline your project needs to succeed.",
    body:
      "We manage the day-to-day so your project stays on time, on budget, and on spec. We perform site assessments, develop accurate cost estimates, coordinate every contractor and subcontractor, and proactively resolve issues before they become problems. You get one accountable partner — and a project that finishes the way it was promised.",
    bullets: [
      "Project assessment and detailed scope development",
      "Cost estimating and budget management",
      "Schedule development, tracking, and acceleration",
      "Contractor and subcontractor coordination",
      "Quality control, RFIs, and submittal management",
    ],
  },
  {
    id: "project-recovery",
    eyebrow: "Service 03",
    title: "Project Recovery",
    image: imgRecovery,
    intro:
      "Stalled, over-budget, or troubled project? We diagnose what's broken and put it back on a path to success.",
    body:
      "When projects go off the rails, owners need an experienced, neutral expert to assess the damage and lead the turnaround. We perform a rapid forensic review of contracts, schedules, finances, and field conditions, then deliver a recovery plan with clear next steps — and execute it alongside you.",
    bullets: [
      "Forensic project audit and analysis",
      "Contractor performance and contract review",
      "Schedule recovery and budget realignment",
      "Dispute resolution and stakeholder mediation",
      "Replanning, restarting, and finishing strong",
    ],
  },
  {
    id: "construction-oversight",
    eyebrow: "Service 04",
    title: "Construction Oversight",
    image: imgOversight,
    intro:
      "Independent eyes on your project — making sure the work is done right, the first time, and to the standards you're paying for.",
    body:
      "We provide on-site quality assurance and inspection services that protect your investment. From architects and engineering, through framing, finishes, and final inspections; we verify that every phase meets the plans, the specs, and your expectations. Catching issues early is the cheapest insurance you can buy.",
    bullets: [
      "Permitting and entitlement coordination",
      "On-site inspections at every critical milestone",
      "Code compliance and quality verification",
      "Photo documentation and progress reporting",
      "Punch list management and final closeout",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        image={heroImg}
        eyebrow="Our Services"
        title={"Owner Representation &\nProject Management Services -\nBuilt Around You"}
        subtitle="Our mission: deliver your project on time, on budget, and to the highest standard — with your interests protected at every step."
      />

      {/* Quick nav */}
      <section className="bg-secondary border-b border-border sticky top-20 lg:top-24 z-30 backdrop-blur-md">
        <div className="container-prose py-4 overflow-x-auto">
          <div className="flex items-center gap-6 text-sm font-medium whitespace-nowrap justify-start lg:justify-center">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="bg-background">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 lg:py-28 ${i % 2 === 1 ? "bg-secondary" : "bg-background"}`}
          >
            <div className="container-prose">
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>div:first-child]:order-last" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] bg-accent" />
                    <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
                      {service.eyebrow}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-lg text-foreground/85 leading-relaxed font-medium">
                    {service.intro}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{service.body}</p>
                  <ul className="mt-8 space-y-3">
                    {service.bullets.map((b) => (
      <li key={b} className="flex items-start gap-3">
        <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
          <Check className="w-3 h-3 text-accent" />
        </span>
        <span className="text-foreground/80">{b}</span>
      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-8 bg-primary text-primary-foreground hover:bg-primary-glow"
                  >
                    <Link to="/contact">
                      Discuss Your Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-gold rounded-lg opacity-20 blur-2xl" />
                  <div className="relative overflow-hidden rounded-lg shadow-elegant">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="w-full h-full object-cover aspect-[3/2]"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent rounded-lg hidden lg:block" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner
        title="Not Sure Where to Start?"
        description="Every project is different. Contact us for a free, no-obligation conversation about your goals — and we'll recommend the right path forward."
      />
    </Layout>
  );
};

export default Services;