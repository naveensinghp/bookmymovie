import React from 'react';

function LinkButton({
      href,
      children,
      ...delegated
    }) {
  const Tag = href ? 'a' : 'button';
  return (
      <Tag 
        href={href}
        {...delegated}
      >
          {children}
      </Tag>
  );
}

export default LinkButton;
