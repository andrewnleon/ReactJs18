import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import "holderjs";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import ToolBar from "./components/NavBar";
// import RecentWork from "./pages/RecentWork";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import "@fontsource/space-grotesk";

function App() {
  return (
    <main>  
      <script src="holder.js"></script>
      <BrowserRouter>
        <ToolBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Cover />
                <Portfolio />
                <CaseStudies />
                <Education />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <>
                <Blog />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
export default App;
