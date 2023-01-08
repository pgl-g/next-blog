import * as React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Plum from "@/components/layout/Plum";
// import ReactCanvasNest from 'react-canvas-nest';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="z-10 layout">
        <div className="mx-8">
          {children}
          <Footer />
        </div>
      </div>
      <Plum />

      {/* <ReactCanvasNest /> */}
    </>
  );
}
