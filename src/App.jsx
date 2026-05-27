import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import BanhoTosa from "./pages/BanhoTosa.jsx"
import Adestramento from "./pages/Adestramento.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <div className="container-fluid">
            <NavBar />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/banho-e-tosa" element={<BanhoTosa />} />
            <Route path="/adestramento" element={<Adestramento />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App