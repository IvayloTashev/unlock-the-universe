import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default App
