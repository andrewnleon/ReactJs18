import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IKContext } from "imagekitio-react";
import SSRProvider from "react-bootstrap/SSRProvider";

import "./styles/App.scss";
import "@fontsource/space-grotesk";
import { ParallaxProvider } from "react-scroll-parallax";

const Home = lazy(() => import("./pages/home"));
const Error404 = lazy(() => import("./pages/Error404"));
const Footer = lazy(() => import("./components/Footer"));
const ToolBar = lazy(() => import("./components/NavBar"));

function app() {
  return (
    <SSRProvider>
      <ParallaxProvider scrollAxis="vertical">
      <Router>
        <ToolBar />
        <IKContext publicKey={"public_kc6OLMDqfnmJC7US1vUWcQDD94c="}  urlEndpoint={"https://ik.imagekit.io/kcxjb1dyl"}>
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/contact" element={<></>} />
              <Route path="/blog/:id" element={<></>} />
              <Route path="/404" exact element={<Error404 />} />
            </Routes>
            <Footer />
          </main>
        </IKContext>
      </Router>
      </ParallaxProvider>
    </SSRProvider>
  );
}

export default app;
