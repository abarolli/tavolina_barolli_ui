import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import MainContent from "./ui/MainContent";
import Controls from "./ui/Controls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tavolina Barolli",
  description: "Tavolina Barolli Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles["home-page"]}>
          <header className={styles["home-page-header"]}>
            {/* Still include h1 for SEO purposes */}
            <h1 className={styles["home-page-title"]}>Tavolina Barolli</h1>{" "}
            <svg
              className={styles["decorative-page-title"]}
              viewBox="0 0 150 40"
            >
              {/* anything inside "defs" is not rendered */}
              <defs>
                <path id="curve" d="M 10 50 A 110 150 0 0 1 140 50" />
              </defs>
              <text>
                <textPath
                  startOffset="50%"
                  textAnchor="middle"
                  xlinkHref="#curve"
                >
                  Tavolina Barolli
                </textPath>
              </text>
            </svg>
            <img
              className={styles["home-page-image"]}
              src="/albanian-icon.png"
              alt=""
            />
          </header>
          <main className={styles["main"]}>
            <section className={styles["main-section"]}>
              <Controls />
              <MainContent>{children}</MainContent>
            </section>
          </main>
          <footer className="footer">&copy; Tavolina Barolli</footer>
        </div>
      </body>
    </html>
  );
}
