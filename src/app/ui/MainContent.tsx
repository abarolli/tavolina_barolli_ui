"use client";

import { usePathname } from "next/navigation";
import styles from "@/app/page.module.css";
import ConditionalCloserLink from "./ConditionalLink";

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isHidden = pathname === "/";

  return (
    <section
      className={`${styles["main-section__content"]} ${
        isHidden ? "hidden" : ""
      }`}
    >
      <ConditionalCloserLink />

      {children}
    </section>
  );
}
