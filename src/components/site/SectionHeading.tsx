import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-4", align === "center" && "justify-center")}>
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">
            {eyebrow}
          </span>
          <span className="w-8 h-[2px] bg-accent" />
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight",
          light ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed",
            light ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
