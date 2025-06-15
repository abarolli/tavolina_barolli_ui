import styles from "@/app/page.module.css";
import LinkWrapper from "./LinkWrapper";

export default function Controls() {
  return (
    <div className={`${styles["main-section__controls"]}`}>
      <LinkWrapper href="/">About Us</LinkWrapper>
      <LinkWrapper href="/menu">See the Menu</LinkWrapper>
      <LinkWrapper href="/reservation">Make a Reservation</LinkWrapper>
    </div>
  );
}
