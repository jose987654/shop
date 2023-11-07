import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SiteXML from "./components/site";
function App() {
  return (
    <main className="App">
      <Routes>
        {/* Routes for the application */}
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/siteXml" element={<SiteXML/>} />
          <Route path="/site" element={<About/>} />
        </Route>
      </Routes>
    </main>
  );
}
export default App;
