import { TechnologyItem } from "@/app/lib/types";
import { TechnologyCard } from "./TechnologyCard";

export interface TechnologyListProps {
  technologies: TechnologyItem[];
}

export function TechnologyList({ technologies }: TechnologyListProps) {
  if (technologies.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            No technologies found
          </h3>
          <p className="text-muted-foreground max-w-md">
            We couldn&apos;t find any technologies at the moment. Please check
            back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
      {technologies.map((technology) => (
        <TechnologyCard key={technology.slug} technology={technology} />
      ))}
    </div>
  );
}
