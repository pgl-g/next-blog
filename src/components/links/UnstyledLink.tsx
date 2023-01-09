import Link from 'next/link';
import * as React from 'react';


const UnstyledLink = React.forwardRef(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          href={href}
          {...nextLinkProps}
          ref={ref}
          {...rest}
          className={className}
        >
          {children}
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={className}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
