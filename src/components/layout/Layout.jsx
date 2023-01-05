import * as React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function Layout({ children }) {

  
  return (
    <>
      <Header />
      <div className="layout">
        <div className="mx-8">
          {children}
          <Footer />
          </div>
      </div>
      {/* <div className="pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-[-1] bg-gray-400" /> */}
    </>
  );
}
