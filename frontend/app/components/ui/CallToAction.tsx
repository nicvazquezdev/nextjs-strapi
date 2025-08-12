import { ROUTES } from "@/app/lib/constants";
import Link from "next/link";
import { ArrowRightIcon } from "../icons";

export function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        href={ROUTES.technologies}
        className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Explore Technologies
        <ArrowRightIcon />
      </Link>
    </div>
  );
}
