import { Alert } from "./components/Alert"
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { AlertState } from "./context/alert/AlertState"
import { FirebaseState } from "./context/firebase/firebaseState"

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route exact path={"/"} element={<Home />} />
              <Route path={"/about"} element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  )
}

export default App
