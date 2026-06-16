import React from "react";
import { Routes, Route } from 'react-router-dom'
import Index from "./components/Index"
import AboutUs from "./Pages/AboutUs"
import Service from "./Pages/Service"
import ContactUs from "./Pages/ContactUs"
import MainLayout from "./MainLayout"

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />} >

      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}

export default App