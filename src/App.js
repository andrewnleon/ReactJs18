import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.css";
import "holderjs";
import Scrollbars from "react-custom-scrollbars-2";
import Cover from "./components/Cover";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import ToolBar from "./components/NavBar";
import RecentWork from "./pages/RecentWork";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
      <main>
        <script src="holder.js"></script>
        <BrowserRouter>
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
        </BrowserRouter>
      </main>
//       {/* <Route path="/" element={<Cover />}>
// <Route index element={<RecentWork />} />
// <Route path="teams" element={<Portfolio />}>
//   <Route path=":teamId" element={<CaseStudies />} />
//   <Route path="new" element={<Contact />} />
//   <Route index element={<Blog />} />
// </Route>
// </Route> */}
  );
}
export default App;