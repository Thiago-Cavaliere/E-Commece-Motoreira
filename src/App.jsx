import Home from "./component/Home/Home";
import NavBar from "./component/NavBar/NavBar";
import Footer from "./component/Footer/Footer";
import MaisVendidos from "./component/MaisVendidos/MaisVendidos";
import Promocao from "./component/promocao/promocao";
import Pneus from "./component/Pneus/Pneus";
import "./App.css";
export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Promocao />
      <Pneus />
      <MaisVendidos />
      <Footer />
    </>
  );
}
