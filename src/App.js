import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import "@fontsource/space-grotesk";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import ToolBar from "./components/NavBar";
import RecentWork from "./components/RecentWork";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Feedback from "./components/Feedback";

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
