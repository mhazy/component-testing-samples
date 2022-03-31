import React from 'react';

import './part2.css';

const Button = (props) => {
  const {onClick, to, label = 'click me'} = props;

  return (
    <>
      <div style={{ textAlign: 'center', display: 'inline-block' }}>
        <div>{label}</div>
        <a className="button--anchor" onClick={onClick} href={to}>
          <i className="fa-solid fa-rocket" />
        </a>
      </div>
    </>
  );
}

export default Button;
