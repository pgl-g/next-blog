import * as React from "react";
import Header from "../../components/layout/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="mx-8 mb:mx-4">{children}</div>
      </div>
      <div className="pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-[-1] bg-gray-400" />
    </>
  );
}
