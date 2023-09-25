import * as React from "react";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Plum from "@/layout/Plum";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout top-20">
        <div className="mx-4">{children}</div>
        <Footer />
      </div>
      <Plum />
    </>
  );
}
