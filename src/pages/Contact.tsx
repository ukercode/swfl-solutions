import { Phone, Mail, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-contact.jpg";

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    value: "941-249-5750",
    href: "tel:9412495750",
    helper: "Mon–Fri, 8 AM – 6 PM ET",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "office@swflsolutions.com",
    href: "mailto:office@swflsolutions.com?subject=Project%20Inquiry",
    helper: "We respond within one business day",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Englewood, FL 34224",
    href: "https://maps.google.com/?q=Englewood+FL+34224",
    helper: "By appointment only",
  },
];

const Contact = () => {
  return (
    <Layout>
      <PageHero
        image={heroImg}
        eyebrow="Contact"
        title="Schedule Your Free Project Assessment"
        subtitle="No obligation, no sales pitch — just a candid conversation about your project, your goals, and how we can help."
      />

      {/* Three cards */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-prose">
          <div className="grid md:grid-cols-3 gap-6">
            {contactCards.map(({ icon: Icon, label, value, href, helper }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-card border border-border rounded-lg p-8 lg:p-10 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">{label}</p>
                <p className="font-serif text-xl text-primary font-semibold break-words leading-snug lg:text-xl">
                  {value}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{helper}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + reassurance */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container-prose grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">Service Area</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary leading-tight">
              Proudly Serving All of Southwest Florida
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From Sarasota to the surrounding coastal communities — including Englewood, Venice, North Port, Port Charlotte, Punta Gorda and surrounding areas.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Englewood", "Venice", "Sarasota", "North Port", "Port Charlotte", "Punta Gorda"].map(
                (city) => (
                  <span
                    key={city}
                    className="px-3 py-1 text-xs font-medium bg-card border border-border text-foreground/80 rounded-full"
                  >
                    {city}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 shadow-card-soft">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-12 h-12 rounded-md bg-secondary flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-primary">Our Response Promise</h3>
                <p className="text-sm text-muted-foreground mt-1">Fast, professional, and personal.</p>
              </div>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Phone calls</span>
                <span className="font-medium text-primary">Same-day response</span>
              </li>
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Email inquiries</span>
                <span className="font-medium text-primary">Within one business day</span>
              </li>
              <li className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">Initial consultation</span>
                <span className="font-medium text-primary">Free of charge</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Project assessment</span>
                <span className="font-medium text-primary">No obligation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-navy text-primary-foreground py-20 lg:py-24">
        <div className="container-prose text-center">
          <MessageCircle className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl mx-auto">
            Ready to Get Started?
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Send us a quick note about your project. We'll be in touch within one business day to schedule your free consultation.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent-glow hover:shadow-gold h-12 px-8"
            >
              <a href="mailto:office@swflsolutions.com?subject=Free%20Project%20Consultation&body=Hi%20SWFL%20Solutions%2C%0A%0AI%27d%20like%20to%20schedule%20a%20free%20project%20consultation.%0A%0AProject%20type%3A%20%0AProject%20location%3A%20%0ATimeline%3A%20%0ABest%20way%20to%20reach%20me%3A%20%0A%0AThanks%21">
                Email Us Now <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-8 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="tel:9412495750">
                <Phone className="w-4 h-4" /> Call 941-249-5750
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
