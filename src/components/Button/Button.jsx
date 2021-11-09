import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  onClick: PropTypes.func,
};

function Button(props) {
  const { onClick } = props;

  return (
    <div
      className={`btn ${props.className}`}
      onClick={onClick ? () => onClick() : null}
    >
      Button
    </div>
  );
}

const OutLineButton = (props) => {
  const { onClick } = props;

  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={onClick ? () => onClick() : null}
    >
      Button
    </Button>
  );
};

export default Button;
