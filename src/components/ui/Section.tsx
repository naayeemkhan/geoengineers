
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  id?: string;
}

const Section = ({
  title,
  subtitle,
  children,
  className,
  fullWidth = false,
  id,
  ...props
}: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 w-full",
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto", fullWidth ? "w-full" : "max-w-7xl")}>
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto px-4">
            {title && (
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 animate-slide-up">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg md:text-xl animate-slide-up animation-delay-200">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
