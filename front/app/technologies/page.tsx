import Image from "next/image";
import Link from "next/link";
import { getTechnologies } from "../lib/technologies";

export const revalidate = 60;

function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: "default" | "secondary" | "accent" }) {
  const variants = {
    default: "inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-foreground",
    secondary: "inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground",
    accent: "inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
  };
  
  return (
    <span className={variants[variant]}>
      {children}
    </span>
  );
}

function Impact({ score }: { score: number }) {
  const getImpactColor = (score: number) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-blue-500";
    if (score >= 40) return "bg-yellow-500";
    return "bg-gray-400";
  };
  
  return (
    <div className="w-full space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Impact Score</span>
        <span>{score}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${getImpactColor(score)}`}
          style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }}
        />
      </div>
    </div>
  );
}

export default async function TechnologiesPage() {
  const items = await getTechnologies();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Technologies
        </h1>
        <p className="text-muted-foreground">
          Discover emerging technologies shaping the future
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {items.map((t) => (
          <article
            key={t.slug}
            className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-accent/20"
          >
            <Link
              href={`/technologies/${t.slug}`}
              className="grid grid-cols-[120px,1fr] gap-6 items-start"
            >
              <div className="relative overflow-hidden rounded-lg">
                {t.image?.url ? (
                  <Image
                    src={t.image.url}
                    alt={t.title}
                    width={120}
                    height={120}
                    className="h-30 w-30 object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-30 w-30 rounded-lg bg-muted flex items-center justify-center">
                    <svg className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="space-y-4 min-w-0">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-semibold text-card-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {t.title}
                    </h2>
                    <time className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(t.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {t.shortDescription}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{t.category}</Badge>
                  <Badge variant="secondary">{t.maturityLevel}</Badge>
                </div>
                
                <Impact score={t.impactScore} />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
