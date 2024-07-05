import { Link } from "react-router-dom";
import styles from "./header.module.css";
import BotaoComMenu from "../BotaoComMenu";

function Header() {
  return (
    <header className={styles.headercontainer}>
      <div className={styles.contactinformation}>
        <span>Contato: (XX) XXXX-XXXX</span>
        <span>Telefone: (XX) XXXX-XXXX</span>
      </div>
      <div className={styles.headercontent}>
        <img
          src="https://i.ibb.co/pnWyRgW/OIG2-XYH-removebg-preview.png"
          alt="OIG2-XYH"
          className={styles.logo}
        />
        <input
          className={styles.searchinput}
          type="text"
          placeholder="digite aqui oque procura"
        />
        <nav className={styles.navigation}>
          <a href="#">Home</a>
          <Link to="/Sobre">Sobre</Link>
          <a href="#">Atendimento</a>
          <BotaoComMenu />{" "}
        </nav>
      </div>
    </header>
  );
}
export default Header;
