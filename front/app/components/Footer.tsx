import React from "react";
import { APP_CONFIG } from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <p>{APP_CONFIG.name} {new Date().getFullYear()} </p>
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Exploring the future of technology</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
