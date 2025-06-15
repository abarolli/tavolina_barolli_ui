"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/app/page.module.css";

type ConditionalCloserLinkProps = {
  className?: string;
};

export default function ConditionalCloserLink({
  className,
}: ConditionalCloserLinkProps) {
  const pathname = usePathname();

  const isHidden = pathname === "/";

  return (
    <Link
      href="/"
      className={`${className} ${styles["close-link"]} link ${
        isHidden ? "hidden" : ""
      }`}
    >
      X
    </Link>
  );
}
