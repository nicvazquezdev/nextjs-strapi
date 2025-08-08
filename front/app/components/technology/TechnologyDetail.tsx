import { TechnologyDetail as TechnologyDetailType } from "@/app/lib/types";
import { Badge } from "@/app/components/ui/Badge";
import { ImpactScore } from "@/app/components/ui/ImpactScore";
import { TechnologyImage } from "./TechnologyImage";
import { formatDate } from "@/app/lib/utils";
import { DATE_FORMATS } from "@/app/lib/constants";

export interface TechnologyDetailProps {
  technology: TechnologyDetailType;
}

export function TechnologyDetail({ technology }: TechnologyDetailProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <TechnologyDetailHeader technology={technology} />
      <TechnologyDetailImage technology={technology} />
      <TechnologyDetailContent technology={technology} />
    </article>
  );
}

function TechnologyDetailHeader({ technology }: { technology: TechnologyDetailType }) {
  return (
    <div className="space-y-6 mb-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {technology.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time>
            {formatDate(technology.publishedAt, DATE_FORMATS.long)}
          </time>
        </div>
      </div>
      
      <TechnologyDetailMeta technology={technology} />
    </div>
  );
}

function TechnologyDetailMeta({ technology }: { technology: TechnologyDetailType }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="accent" size="lg">
        {technology.category}
      </Badge>
      <Badge variant="secondary" size="lg">
        {technology.maturityLevel}
      </Badge>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">Impact:</span>
        <div className="flex items-center gap-2">
          <ImpactScore 
            score={technology.impactScore} 
            showLabel={false} 
            size="lg" 
            className="w-16"
          />
          <span className="text-sm font-medium text-foreground">
            {technology.impactScore}%
          </span>
        </div>
      </div>
    </div>
  );
}

function TechnologyDetailImage({ technology }: { technology: TechnologyDetailType }) {
  if (!technology.image?.url) return null;

  return (
    <div className="mb-8">
      <div className="relative overflow-hidden rounded-xl border border-border">
        <TechnologyImage
          src={technology.image.url}
          alt={technology.title}
          width={1200}
          height={630}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}

function TechnologyDetailContent({ technology }: { technology: TechnologyDetailType }) {
  return (
    <div className="space-y-6">
      <p className="text-xl leading-relaxed text-muted-foreground">
        {technology.shortDescription}
      </p>
      
      <div className="border-t border-border pt-6">
        <div
          className="prose prose-neutral prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent/80"
          dangerouslySetInnerHTML={{ __html: technology.description }}
        />
      </div>
    </div>
  );
}
