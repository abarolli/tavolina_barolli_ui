"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkWrapperProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export default function LinkWrapper({
  children,
  href,
  className,
}: LinkWrapperProps) {
  const pathname = usePathname();

  const isSelected = href === pathname;

  return (
    <Link
      href={href}
      className={
        (className ?? "") + " link" + (isSelected ? " link--selected" : "")
      }
    >
      {children}
    </Link>
  );
}
