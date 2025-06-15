import styles from "@/app/about/about.module.css";

export default function AboutPage() {
  return (
    <section className="content__section">
      <h2>About Us</h2>

      <p className={styles["section__paragraph"]}>
        At Tavolina Barolli, we bring the rich flavors, warm hospitality, and
        heartfelt traditions of Albania to your table. Our restaurant is a
        celebration of food made with love — using fresh ingredients,
        time-honored recipes, and a dash of creativity — just the way we serve
        our own families. Whether you're sharing a meal with friends, honoring a
        special occasion, or simply looking for a taste of home, we invite you
        to sit back, relax, and enjoy a true Albanian dining experience.
      </p>

      <p className={styles["section__paragraph"]}>Mirë që jeni këtu!</p>
    </section>
  );
}
