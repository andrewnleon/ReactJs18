import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import "@fontsource/space-grotesk";
import "holderjs";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import About from "./pages/About";
import ToolBar from "./components/NavBar";
import RecentWork from "./pages/RecentWork";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <BrowserRouter>
      <main>
        <ToolBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Cover />
                <RecentWork />
                <Portfolio />
                {/* <CaseStudies />
                <About /> */}
                <Feedback />
                <Contact />
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
      </main>
    </BrowserRouter>
  );
}
export default App;
