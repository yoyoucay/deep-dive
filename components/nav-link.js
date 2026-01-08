"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const path = usePathname();
  
  // For root path, check exact match. For others, check if path starts with href
  const isActive = href === "/" 
    ? path === "/" 
    : path.startsWith(href);
  
  return (
    <Link href={href} className={isActive ? "active" : undefined}>
      {children}
    </Link>
  );
}