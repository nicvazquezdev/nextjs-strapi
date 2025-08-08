import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Next Big Things
        </Link>
        <nav className="text-sm">
          <Link href="/technologies" className="hover:opacity-80">
            Technologies
          </Link>
        </nav>
      </div>
    </header>
  );
}
