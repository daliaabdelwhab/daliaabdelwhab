import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/components/Home";

function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                      
                  
                </Routes>
            </BrowserRouter>
      
        </div>
    );
}

export default AppRoutes;
