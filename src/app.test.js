import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

it("Testing Navar", () => {
  const { queryByTestId } = render(
    <NavBar />
  );
  expect(queryByTestId("Navbar")).toBeTruthy();
});

it("Testing Footer", () => {
  const { queryByTestId } = render(
    <Footer />
  );
  expect(queryByTestId("Footer")).toBeTruthy();
});