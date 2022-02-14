import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resultadoslog from "./components/Resultadoslog"
import Table from "./components/Table"
import Fetch from "./components/fetch"

function App() {
 
  return (
    <div>
      <Navbar />
      <Fetch/>
      <Footer />
    </div>
  );
}

export default App;
