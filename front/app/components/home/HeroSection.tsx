import { APP_CONFIG } from "@/app/lib/constants";
import React from "react";

export function HeroSection() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
        {APP_CONFIG.name}
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
        {APP_CONFIG.description}
      </p>
    </div>
  );
}
