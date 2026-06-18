import Link from "next/link";
import Icon from "./components/Icon";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.badge}>
        <Icon name="terminal" size={15} />
        404
      </div>
      <h1 className={styles.title}>This page wandered off.</h1>
      <p className={styles.sub}>
        The page you&apos;re looking for doesn&apos;t exist, moved, or never did.
        Let&apos;s get you back on track.
      </p>
      <div className={styles.actions}>
        <Link href="/" className="cta-btn">
          Back home
        </Link>
        <Link href="/works" className="ghost-btn">
          <Icon name="arrow-up-right" size={15} />
          See my work
        </Link>
      </div>
    </div>
  );
}
