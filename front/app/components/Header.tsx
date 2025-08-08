import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
          >
            <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground text-sm font-bold">
                N
              </span>
            </div>
            <span>Next Big Things</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              href="/technologies"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
            >
              Technologies
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
