import { TechnologyService } from "../lib/services/technology.service";
import { TechnologyList } from "../components/technology/TechnologyList";
import { PageHeader } from "../components/layout/PageHeader";

export const revalidate = 60;

export default async function TechnologiesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Technologies"
        description="Discover emerging technologies shaping the future"
      />

      <TechnologiesContent />
    </div>
  );
}

async function TechnologiesContent() {
  const technologies = await TechnologyService.getTechnologies();

  return <TechnologyList technologies={technologies} />;
}
