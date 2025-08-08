import { cn } from "@/app/lib/utils";

export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8",
} as const;

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-muted border-t-accent",
        sizes[size],
        className
      )}
    />
  );
}

export function LoadingCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="grid grid-cols-[120px,1fr] gap-6 items-start">
        <div className="h-30 w-30 rounded-lg bg-muted animate-pulse" />
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-6 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-muted rounded-full animate-pulse" />
            <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
          </div>
          <div className="h-2 bg-muted rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="h-8 bg-muted rounded w-48 animate-pulse" />
        <div className="h-4 bg-muted rounded w-64 animate-pulse" />
      </div>
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <LoadingCard key={i} />
        ))}
      </div>
    </div>
  );
}
