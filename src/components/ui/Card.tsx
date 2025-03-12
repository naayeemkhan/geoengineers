
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
}

const Card = ({
  children,
  className,
  glass = false,
  hover = false,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border shadow-sm",
        glass && "glass",
        hover && "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const CardImage = ({
  src,
  alt = "",
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className="w-full aspect-video overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover transition-transform duration-500 hover:scale-105", className)}
        {...props}
      />
    </div>
  );
};

const CardContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className={cn("text-xl font-semibold mb-2", className)} {...props}>
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
};

export { Card, CardImage, CardContent, CardTitle, CardDescription };
