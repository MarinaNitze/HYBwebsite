import React from 'react';

export default function Block({
  theme = ``,
  title = ``,
  subtitle = false,
  children = false,
}) {
  return (
    <div className={`block ${theme || `block--default`}`}>
      <div className="block-ribbon">
        <img src="/img/ribbon.svg" alt="" role="presentation" />
      </div>
      <div className="block-wrapper">
        <div className="block-title">{title}</div>
        {subtitle && <div className="block-subtitle">{subtitle}</div>}
        {children && <div className="block-content">{children}</div>}
      </div>
    </div>
  );
}
