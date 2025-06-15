import styles from "@/app/menu/menu.module.css";
import LightBoxImage from "../ui/LightBoxImage";

export default function MenuPage() {
  return (
    <section className="content__section">
      <h2>Menu</h2>

      <LightBoxImage
        src="/menu.jpg"
        className={`${styles["menu-image"]} lightbox-image`}
      />
    </section>
  );
}
