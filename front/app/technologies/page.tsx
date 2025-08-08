import Image from "next/image";
import Link from "next/link";
import { getTechnologies } from "../lib/technologies";

export const revalidate = 60;

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs">
      {children}
    </span>
  );
}

function Impact({ score }: { score: number }) {
  return (
    <div className="w-full">
      <div className="h-1.5 w-full rounded bg-gray-200" />
      <div
        className="h-1.5 -mt-1.5 rounded bg-black"
        style={{ width: `${Math.min(Math.max(score, 0), 100)}%` }}
      />
    </div>
  );
}

export default async function TechnologiesPage() {
  const items = await getTechnologies();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-6">
        Technologies
      </h1>
      <ul className="grid gap-4">
        {items.map((t) => (
          <li
            key={t.slug}
            className="rounded-xl border p-5 hover:shadow-sm transition"
          >
            <Link
              href={`/technologies/${t.slug}`}
              className="grid grid-cols-[96px,1fr] gap-4 items-start"
            >
              {t.image?.url ? (
                <Image
                  src={t.image.url}
                  alt={t.title}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-lg object-cover"
                />
              ) : (
                <div className="h-24 w-24 rounded-lg bg-gray-100" />
              )}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-medium">{t.title}</h2>
                  <span className="text-xs text-gray-500">
                    {new Date(t.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{t.shortDescription}</p>
                <div className="flex items-center gap-2">
                  <Badge>{t.category}</Badge>
                  <Badge>{t.maturityLevel}</Badge>
                </div>
                <div className="pt-2">
                  <Impact score={t.impactScore} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
