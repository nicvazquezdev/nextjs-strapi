import Link from "next/link";
import React from "react";
import { Navigation } from "./layout/Navigation";
import { APP_CONFIG, ROUTES } from "@/app/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={ROUTES.home}
            className="flex items-center space-x-2 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground text-sm font-bold">
                N
              </span>
            </div>
            <span>{APP_CONFIG.name}</span>
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
