import { ShieldCheck, Award, Users, Heart, Target, Eye } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABanner } from "@/components/site/CTABanner";
import heroImg from "@/assets/hero-about.jpg";

const values = [
  { icon: Heart, title: "Loyalty", desc: "We work for you and what is in your best interests. No conflicts. No exceptions." },
  { icon: ShieldCheck, title: "Integrity", desc: "Honest assessments, transparent pricing, and clear communication — always." },
  { icon: Target, title: "Excellence", desc: "We hold every project — and every partner — to the highest professional standard." },
  { icon: Eye, title: "Vigilance", desc: "Proactive oversight prevents problems instead of just reacting to them." },
];

const credentials = [
  { label: "Experienced", desc: "Years of Florida project history" },
  { label: "Insured", desc: "Fully bonded and insured for your protection" },
  { label: "Independent", desc: "Exclusively on your side — never the contractor's" },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        image={heroImg}
        eyebrow="About Us"
        title="Your Trusted Partner in Southwest Florida"
        subtitle="Founded in Englewood, Florida, SWFL Solutions was built on a simple belief: every owner deserves an expert in their corner — one who answers only to them."
      />

      {/* Our Journey */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Our Journey</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              Built in Florida. Built on Trust.
            </h2>
          </div>
          <div className="space-y-5 text-foreground/80 leading-relaxed text-base lg:text-lg">
            <p>
              SWFL Solutions was founded in Englewood, Florida to fill a critical gap in the construction and real estate market: independent, owner representation. Too many homeowners and businesses had been burned by projects that ran late, over budget, or fell short of what was promised — often because they had no one in their corner managing their interests.
            </p>
            <p>
              We serve clients in Southwest Florida — from individual homeowners building their coastal&nbsp;dream&nbsp;residence to commercial developers managing multi-property portfolios. Whether the project is large or small, residential or commercial, our role stays the same: making sure your vision and investment is secure, on budget, and on track from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Mission & Values"
            title="What Drives Every Decision We Make"
            description="Our work is shaped by honesty and integrity which are core values that govern every project, every relationship, every recommendation."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-lg p-7 shadow-card-soft hover:shadow-elegant transition-all hover:-translate-y-1 duration-500"
              >
                <div className="w-12 h-12 rounded-md bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Why Choose Us</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
              100% Loyalty. Zero Conflicts.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Most construction problems trace back to one root cause: the owner had no expert advocate. We exist to solve that — for individuals and businesses alike.
            </p>
          </div>
          <div className="lg:col-span-3 space-y-6">
            <div className="border-l-4 border-accent pl-6 py-2">
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">For Homeowners</h3>
              <p className="text-foreground/80 leading-relaxed">
                Building or renovating your home is one of the largest investments you'll ever make. We make sure you get what you paid for — without the lack of communication, crippling delays, surprise change orders, cost over runs and stress that comes with going it alone.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-2">
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">For Businesses & Developers</h3>
              <p className="text-foreground/80 leading-relaxed">
                Commercial projects demand professional oversight. We bring the discipline, documentation, and decision support that protects your capital and accelerates your timeline — with the discretion and reliability your business requires.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-6 py-2">
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">For Real Estate Investors</h3>
              <p className="text-foreground/80 leading-relaxed">
                From feasibility through closeout, we provide the project intelligence and execution muscle to maximize ROI — and we know the Southwest Florida market intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container-prose grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
          {credentials.map((c) => (
            <div key={c.label} className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <Award className="w-5 h-5 text-accent" />
                <h3 className="font-serif text-2xl font-semibold text-accent">{c.label}</h3>
              </div>
              <p className="text-sm text-primary-foreground/75">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Leadership"
            title="Experienced Hands, Local Roots"
            description="A growing team of construction, project management, and real estate professionals — proudly based in Englewood, Florida and serving the Southwest Florida region."
          />
          <div className="mt-12 max-w-3xl mx-auto bg-secondary border border-border rounded-lg p-10 text-center shadow-card-soft">
            <Users className="w-10 h-10 text-accent mx-auto mb-4" />
            <p className="text-foreground/80 leading-relaxed">
              Want to learn more about our background and experience? We'd be happy to walk you through our background, project history, and references during your free consultation.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Talk About Your Project"
        description="Whether you're starting from scratch or rescuing a project that's gone sideways, we're ready to listen."
      />
    </Layout>
  );
};

export default About;
