import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Sobre from "./pages/Sobre";
import Quadrosanimes from "./pages/quadros/Quadrosanimes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sobre" element={<Sobre />} />
        <Route path="Quadrosanimes" element={<Quadrosanimes />} />
        <Route path="*" element={<h1>Opa, essa pagina não existe</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
