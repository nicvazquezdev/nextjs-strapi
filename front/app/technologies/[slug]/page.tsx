import { TechnologyService } from "@/app/lib/services/technology.service";
import { TechnologyDetail } from "@/app/components/technology/TechnologyDetail";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await TechnologyService.getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const technology = await TechnologyService.getTechnologyBySlug(slug);
  if (!technology) return { title: "Technology" };
  
  return {
    title: technology.title,
    description: technology.shortDescription,
    openGraph: {
      title: technology.title,
      description: technology.shortDescription,
      images: technology.image?.url ? [technology.image.url] : [],
    },
  };
}

export default async function TechnologyPage({ params }: Props) {
  const { slug } = await params;
  const technology = await TechnologyService.getTechnologyBySlug(slug);
  if (!technology) return notFound();

  return <TechnologyDetail technology={technology} />;
}
