import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import ProdQuadroanimes from "../../components/prodquadrosanimes";

function Quadrosanimes() {
  return (
    <div>
      <Header />
      <ProdQuadroanimes />
      <Link to={"/"}>Home</Link>
      <Footer />
    </div>
  );
}

export default Quadrosanimes;
