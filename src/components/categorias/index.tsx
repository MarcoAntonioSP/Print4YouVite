import { Link } from "react-router-dom";
import styles from "./Categorias.module.css";

function Categorias() {
  return (
    <div className={styles.categorias}>
      <nav className={styles.navcategorias}>
        <Link to="Quadrosanimes">Quadros</Link>
        <a href="#">Canecas</a>
        <a href="#">Camisas</a>
        <a href="#">Escolhendo</a>
      </nav>
    </div>
  );
}
export default Categorias;
