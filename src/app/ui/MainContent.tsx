"use client";

import { usePathname } from "next/navigation";
import styles from "@/app/page.module.css";

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <section className={`${styles["main-section__content"]}`}>
      {children}
    </section>
  );
}
