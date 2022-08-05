import IgniteLogo from "../assets/ignite-logo.svg";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}
