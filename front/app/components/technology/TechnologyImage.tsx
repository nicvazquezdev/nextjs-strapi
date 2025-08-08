import Image from "next/image";
import { cn } from "@/app/lib/utils";

export interface TechnologyImageProps {
  src?: string | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function TechnologyImage({ 
  src, 
  alt, 
  width = 120, 
  height = 120, 
  className,
  priority = false 
}: TechnologyImageProps) {
  if (!src) {
    return (
      <div className={cn(
        "rounded-lg bg-muted flex items-center justify-center",
        className
      )} style={{ width, height }}>
        <TechnologyPlaceholderIcon />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover transition-transform duration-200 group-hover:scale-105"
        style={{ width, height }}
      />
    </div>
  );
}

function TechnologyPlaceholderIcon() {
  return (
    <svg 
      className="h-8 w-8 text-muted-foreground" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
      />
    </svg>
  );
}
