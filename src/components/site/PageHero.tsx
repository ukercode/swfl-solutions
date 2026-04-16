import { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const PageHero = ({ image, eyebrow, title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[440px] flex items-center text-primary-foreground overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container-prose relative z-10 pt-20">
        {eyebrow && (
          <div className="flex items-center gap-3 mb-5 animate-fade-in-up">
            <span className="w-10 h-[2px] bg-accent" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-accent font-medium">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed animate-fade-in-up">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-fade-in-up">{children}</div>}
      </div>
    </section>
  );
};
