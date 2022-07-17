import React from "react";
import ReactDOM from "react-dom/client";
import SSRProvider from "react-bootstrap/SSRProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import "@fontsource/space-grotesk";
import Footer from "./components/Footer";
import ToolBar from "./components/NavBar";
import Home from "./pages/home/index";
import { IKContext } from "imagekitio-react";
import { IMAGE_KIT, IMAGE_KIT_API_KEY } from "./config/environment"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <BrowserRouter>
        <ToolBar />
        <IKContext
          publicKey={IMAGE_KIT_API_KEY}
          urlEndpoint={IMAGE_KIT}
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
