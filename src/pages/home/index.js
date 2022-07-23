import React from "react";
import RecentWork from "./RecentWork";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Feedback from "./Feedback";
import Cover from "../../components/Cover";
function index() {
  return (
    <>
      <Cover />
      <RecentWork />
      <Portfolio />
      <Feedback />
      <Contact />
    </>
  );
}

export default index;
