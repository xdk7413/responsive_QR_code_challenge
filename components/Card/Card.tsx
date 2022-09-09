import styles from "./Card.module.scss";

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.container_card}>
        <div className={styles.image_container}>
          <img src="/image-qr-code.png" alt="" />
        </div>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
