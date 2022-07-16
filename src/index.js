import React from "react";
import ReactDOM from "react-dom/client";
import SSRProvider from "react-bootstrap/SSRProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import "@fontsource/space-grotesk";
import Footer from "./components/Footer";
import ToolBar from "./components/NavBar";
import Home from "./pages/home/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <BrowserRouter>
        <ToolBar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/contact" element={<></>} />
            <Route path="/blog/:id" element={<></>} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </SSRProvider>
  </React.StrictMode>
);
