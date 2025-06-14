"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/app/page.module.css";

export default function ConditionalCloserLink() {
  const pathname = usePathname();

  const isHidden = pathname === "/";

  return (
    <Link
      href="/"
      className={`${styles["close-link"]} ${styles["link"]} ${
        isHidden ? "hidden" : ""
      }`}
    >
      X
    </Link>
  );
}
