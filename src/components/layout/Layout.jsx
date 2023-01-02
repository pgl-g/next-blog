import * as React from "react";
import Header from "../../components/layout/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="mx-8 mb:mx-4">{children}</div>
      </div>
    </>
  );
}
