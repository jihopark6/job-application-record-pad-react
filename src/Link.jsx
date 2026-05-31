// Hashtag link component

import React from 'react';

export function Link({ to, children, ...props }) {
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    
    window.history.pushState({}, '', to);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}