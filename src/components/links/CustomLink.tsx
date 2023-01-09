import React from "react";
import UnstyledLink from "./UnstyledLink";

export default function CustomLink({ children, className = "", ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={`animated-underline custom-link inline-flex items-center font-medium
      focus:outline-none focus-visible:ring focus-visible:ring-primary-300
      border-b border-dotted border-dark hover:border-black/0 ${className}`}
    >
      <span className="bg-gradient-to-tr from-primary-300 to-primary-400 bg-clip-text">
        {children}
      </span>
    </UnstyledLink>
  );
}
