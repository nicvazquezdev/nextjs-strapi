import { getAllSlugs, getTechnologyBySlug } from "@/app/lib/technologies";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const tech = await getTechnologyBySlug(params.slug);
  if (!tech) return { title: "Technology" };
  return {
    title: tech.title,
    description: tech.shortDescription,
    openGraph: {
      title: tech.title,
      description: tech.shortDescription,
      images: tech.image?.url ? [tech.image.url] : [],
    },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const tech = await getTechnologyBySlug(params.slug);
  if (!tech) return notFound();

  const getImpactColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-blue-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-gray-400";
  };

  return (
    <article className="max-w-4xl mx-auto">
      <div className="space-y-6 mb-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {tech.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time>
              {new Date(tech.publishedAt).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            {tech.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
            {tech.maturityLevel}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Impact:</span>
            <div className="flex items-center gap-2">
              <div className="h-2 w-16 rounded-full bg-muted">
                <div
                  className={`h-2 rounded-full ${getImpactColor(tech.impactScore)}`}
                  style={{ width: `${Math.min(Math.max(tech.impactScore, 0), 100)}%` }}
                />
              </div>
              <span className="text-sm font-medium text-foreground">{tech.impactScore}%</span>
            </div>
          </div>
        </div>
      </div>

      {tech.image?.url && (
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-xl border border-border">
            <Image
              src={tech.image.url}
              alt={tech.title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      <div className="space-y-6">
        <p className="text-xl leading-relaxed text-muted-foreground">
          {tech.shortDescription}
        </p>
        
        <div className="border-t border-border pt-6">
          <div
            className="prose prose-neutral prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent hover:prose-a:text-accent/80"
            dangerouslySetInnerHTML={{ __html: tech.description }}
          />
        </div>
      </div>
    </article>
  );
}
