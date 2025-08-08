import { cn } from "@/app/lib/utils";
import { IMPACT_SCORE_COLORS, IMPACT_SCORE_THRESHOLDS } from "@/app/lib/constants";

export interface ImpactScoreProps {
  score: number;
  showLabel?: boolean;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: {
    container: "w-12",
    bar: "h-1",
    text: "text-xs",
  },
  md: {
    container: "w-full",
    bar: "h-2",
    text: "text-xs",
  },
  lg: {
    container: "w-20",
    bar: "h-3",
    text: "text-sm",
  },
} as const;

export function getImpactScoreColor(score: number): string {
  if (score >= IMPACT_SCORE_THRESHOLDS.high) return IMPACT_SCORE_COLORS.high;
  if (score >= IMPACT_SCORE_THRESHOLDS.medium) return IMPACT_SCORE_COLORS.medium;
  if (score >= IMPACT_SCORE_THRESHOLDS.low) return IMPACT_SCORE_COLORS.low;
  return IMPACT_SCORE_COLORS.minimal;
}

export function ImpactScore({ 
  score, 
  showLabel = true, 
  showPercentage = true, 
  size = "md",
  className 
}: ImpactScoreProps) {
  const normalizedScore = Math.min(Math.max(score, 0), 100);
  const colorClass = getImpactScoreColor(normalizedScore);
  const sizeConfig = sizes[size];

  return (
    <div className={cn("space-y-1", className)}>
      {showLabel && (
        <div className={cn("flex justify-between", sizeConfig.text, "text-muted-foreground")}>
          <span>Impact Score</span>
          {showPercentage && <span>{normalizedScore}%</span>}
        </div>
      )}
      <div className={cn(sizeConfig.container, sizeConfig.bar, "rounded-full bg-muted")}>
        <div
          className={cn(sizeConfig.bar, "rounded-full transition-all duration-300", colorClass)}
          style={{ width: `${normalizedScore}%` }}
        />
      </div>
    </div>
  );
}
