import { cn } from "@/app/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "accent" | "destructive";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const badgeVariants = {
  default: "border-border bg-background text-foreground",
  secondary: "bg-muted text-muted-foreground",
  accent: "bg-accent text-accent-foreground",
  destructive: "bg-destructive text-destructive-foreground",
} as const;

const badgeSizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-0.5 text-xs",
  lg: "px-3 py-1 text-sm",
} as const;

export function Badge({ 
  children, 
  variant = "default", 
  size = "md", 
  className 
}: BadgeProps) {
  return (
    <span 
      className={cn(
        "inline-flex items-center rounded-full border font-medium transition-colors",
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
