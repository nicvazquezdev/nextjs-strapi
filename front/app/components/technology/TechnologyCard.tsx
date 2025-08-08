import Link from "next/link";
import { TechnologyItem } from "@/app/lib/types";
import { Badge } from "@/app/components/ui/Badge";
import { TechnologyImage } from "./TechnologyImage";
import { formatDate } from "@/app/lib/utils";
import { ROUTES } from "@/app/lib/constants";

export interface TechnologyCardProps {
  technology: TechnologyItem;
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <article className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-accent/20">
      <Link
        href={ROUTES.technologyDetail(technology.slug)}
        className="grid grid-cols-[120px,1fr] gap-6 items-start"
      >
        <TechnologyImage
          src={technology.image.url}
          alt={technology.title}
          className="w-30 h-30"
        />

        <div className="space-y-4 min-w-0">
          <TechnologyCardHeader technology={technology} />
          <TechnologyCardBadges technology={technology} />
        </div>
      </Link>
    </article>
  );
}

function TechnologyCardHeader({ technology }: { technology: TechnologyItem }) {
  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors line-clamp-2">
          {technology.title}
        </h2>
        <time className="text-xs text-muted-foreground whitespace-nowrap">
          {formatDate(technology.publishedAt)}
        </time>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {technology.shortDescription}
      </p>
    </div>
  );
}

function TechnologyCardBadges({ technology }: { technology: TechnologyItem }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="accent">{technology.category}</Badge>
      <Badge variant="secondary">{technology.maturityLevel}</Badge>
    </div>
  );
}
