import React from 'react';

import './part3.css';

const Button = (props) => {
  const {onClick, to, label = 'click me'} = props;

  const handleKeydown = React.useCallback((event) => {
    if (event && (event.code === 'Enter' || event.code === 'Space')) {
      onClick();
    }
  }, [onClick]);

  const linkProps = (to || '').length === 0 ?
    {
      role: 'button',
      tabIndex: 0,
      onKeyDown: handleKeydown
    } : {
      href: to
    };
  return (
    <>
      <div style={{ textAlign: 'center', display: 'inline-block' }}>
        <div>{label}</div>
        <a className="button--anchor" onClick={onClick} {...linkProps}>
          <i className="fa-solid fa-rocket" />
        </a>
      </div>
    </>
  );
}

export default Button;
