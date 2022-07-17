import React from "react";
import ReactDOM from "react-dom/client";
import SSRProvider from "react-bootstrap/SSRProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import "@fontsource/space-grotesk";
import Footer from "./components/Footer";
import ToolBar from "./components/NavBar";
import Home from "./pages/home/index";
import { IKContext } from "imagekitio-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <BrowserRouter>
        <ToolBar />
        <IKContext
          publicKey={`${process.env.REACT_APP_IMAGE_KIT_API_KEY}`}
          urlEndpoint={`${process.env.REACT_APP_IMAGE_KIT}`}
        >
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
        </IKContext>
      </BrowserRouter>
    </SSRProvider>
  </React.StrictMode>
);
