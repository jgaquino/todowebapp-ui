import Logo from "../../assets/logo.svg";
import styles from "./Header.module.scss";

const Header = ({ title, subtitle }) => {
  return (
    <header className={styles.Header}>
      <img alt="Logo" src={Logo} />
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </header>
  );
};

export default Header;
