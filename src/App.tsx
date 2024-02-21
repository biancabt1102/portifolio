import Home from "./pages/Home";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import SobreMim from "./pages/SobreMim";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="sobremim" element={<SobreMim />} />
      <Route path="projetos" element={<Projetos/>} />
      <Route path="contato" element={<Contato />}/>
    </Route>
  )
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}