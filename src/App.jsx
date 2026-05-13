import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import Pages from "./pages/BanhoToda.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <div class="container">
            <NavBar />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/banho-e-tosa" element={<BanhoTosa />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App