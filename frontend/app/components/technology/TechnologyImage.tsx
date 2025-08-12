import Image from "next/image";
import { cn } from "@/app/lib/utils";

export interface TechnologyImageProps {
  src: string;
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
  priority = false,
}: TechnologyImageProps) {
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
