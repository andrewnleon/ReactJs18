import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Routes, Route } from "react-router-dom";
import "@fontsource/roboto";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import ToolBar from "./components/NavBar";
import RecentWork from "./pages/RecentWork";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import "holderjs";
import './scss/App.scss';
import "@fontsource/carrois-gothic";

function App() {
  return (
    <>   
      <script src="holder.js"></script>
      <main>
        <Scrollbars universal>
          <ToolBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Cover />
                  <RecentWork />
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
        </Scrollbars>
    </main>
   </>
  );
}
export default App;
