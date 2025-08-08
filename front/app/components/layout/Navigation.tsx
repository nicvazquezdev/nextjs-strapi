import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { ROUTES } from "@/app/lib/constants";

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavigationProps {
  items?: NavigationItem[];
  className?: string;
}

const defaultItems: NavigationItem[] = [
  {
    label: "Technologies",
    href: ROUTES.technologies,
  },
];

export function Navigation({
  items = defaultItems,
  className,
}: NavigationProps) {
  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {items.map((item) => (
        <NavigationLink key={item.href} {...item} />
      ))}
    </nav>
  );
}

function NavigationLink({ label, href, isActive }: NavigationItem) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-foreground focus-visible:text-foreground",
        isActive ? "text-foreground" : "text-muted-foreground",
      )}
    >
      {label}
    </Link>
  );
}
