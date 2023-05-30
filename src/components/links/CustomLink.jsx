import React from "react";
import UnstyledLink from "./UnstyledLink";

export default function CustomLink({ children, className = "", ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={className}
    >
      <span className="bg-gradient-to-tr from-primary-300 to-primary-400 bg-clip-text">
        {children}
      </span>
    </UnstyledLink>
  );
}
