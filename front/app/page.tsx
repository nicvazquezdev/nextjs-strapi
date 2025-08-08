import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Next Big Things</h1>
      <p className="text-gray-600">
        Minimal catalog of emerging technologies. Content managed in Strapi,
        delivered via GraphQL, rendered with Next.js.
      </p>
      <Link href="/technologies" className="underline">
        View technologies
      </Link>
    </main>
  );
}
