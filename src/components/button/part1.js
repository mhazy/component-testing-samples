import React from 'react';

const Button = (props) => {
  const {onClick, label = 'click me'} = props;

  return (
    <>
      <button onClick={onClick}>{label}</button>
    </>
  );
}

export default Button;
