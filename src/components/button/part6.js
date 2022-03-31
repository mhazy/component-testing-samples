import React from 'react';
import {useSelector} from 'react-redux';
import {selectButtonLabel} from "../state/button.selectors";

const Button = (props) => {
  const {onClick} = props;
  const dataFromState = useSelector(selectButtonLabel);
  return (
    <>
      <button onClick={onClick}>{dataFromState}</button>
    </>
  );
}

export default Button;
