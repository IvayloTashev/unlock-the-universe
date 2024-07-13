import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" />
            </Routes>
        </>
    )
}

export default App
