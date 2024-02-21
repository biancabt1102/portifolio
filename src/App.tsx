import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import SobreMim from "./pages/SobreMim";

export default function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="sobremim" element={<SobreMim />} />
      <Route path="projetos" element={<Projetos />} />
      <Route path="contato" element={<Contato />} />
    </Routes>
  );
}