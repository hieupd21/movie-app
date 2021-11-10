import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

Button.propTypes = {
  onClick: PropTypes.func,
};

export default function Button(props) {
  const { onClick } = props;

  return (
    <button
      className={`btn ${props.className}`}
      onClick={onClick ? () => onClick() : null}
    >
      {props.children}
    </button>
  );
}

export const OutLineButton = (props) => {
  const { onClick } = props;

  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={onClick ? () => onClick() : null}
    >
      {props.children}
    </Button>
  );
};
