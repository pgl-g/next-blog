import * as React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Plum from "@/components/layout/Plum";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="mx-4">{children}</div>
        <Footer />
      </div>
      {/* <Plum /> */}
    </>
  );
}
