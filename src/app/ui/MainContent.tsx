"use client";

import { usePathname } from "next/navigation";
import styles from "@/app/page.module.css";

export default function MainContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isHidden = pathname === "/";

  return (
    <div
      className={`${styles["main-section__content"]} ${
        isHidden ? "hidden" : ""
      }`}
    >
      {children}
    </div>
  );
}
