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

  return (
    <article className="prose prose-neutral max-w-none">
      <div className="not-prose space-y-3 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{tech.title}</h1>
        <div className="text-sm text-gray-500">
          {new Date(tech.publishedAt).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5">
            {tech.category}
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5">
            {tech.maturityLevel}
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5">
            Impact {tech.impactScore}
          </span>
        </div>
      </div>

      {tech.image?.url && (
        <div className="not-prose mb-6">
          <Image
            src={tech.image.url}
            alt={tech.title}
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      )}

      <p className="text-lg text-gray-800">{tech.shortDescription}</p>
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: tech.description }}
      />
    </article>
  );
}
