import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/sign-up/SignUp";
import Register from './components/sign-up/register/Register';
import PictureOfTheDay from './components/picture-of-the-day/PictureOfTheDay';
import Explore from './components/explore/Explore';
import ExploreCatalog from './components/explore-catalog/ExploreCatalog';
import CatalogCardDetails from './components/explore-catalog/explore-catalog-card/catalog-card-details/CatalogCardDetails';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
    return (
        <>
            <AuthContextProvider>

                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/explore/:name" element={<ExploreCatalog />} />
                    <Route path="/explore/:name/:id" element={<CatalogCardDetails />} />
                    <Route path="/picture-of-the-day" element={<PictureOfTheDay />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                
            </AuthContextProvider>
        </>
    )
}

export default App
