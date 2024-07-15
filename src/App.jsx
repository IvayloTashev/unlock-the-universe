import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/sign-up/SignUp";
import Register from './components/sign-up/register/Register';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    )
}

export default App
