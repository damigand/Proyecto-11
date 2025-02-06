import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

import "./index.css";
import App from "./App.jsx";
import Characters from "./pages/Characters/Characters.jsx";
import Locations from "./pages/Locations/Locations.jsx";
import Episodes from "./pages/Episodes/Episodes.jsx";
import NotFound from "./pages/NotFound/NotFOund.jsx";
import Character from "./pages/Character/Character.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="characters" element={<Characters />} />
                    <Route path="characters/:id" element={<Character />} />
                    <Route path="locations/" element={<Locations />} />
                    <Route path="episodes/" element={<Episodes />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
