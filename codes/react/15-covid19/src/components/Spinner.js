import React, { memo } from "react";
import PropTypes from "prop-types";

import { MagnifyingGlass } from "react-loader-spinner";

const Spinner = memo(({ loading, width, height, color, glassColor }) => {
  return (
    <MagnifyingGlass
      visible={loading}
      height={height}
      width={width}
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        position: "fixed",
        zIndex: 1000,
        left: "50%",
        top: "50%",
        trasform: "translate(-50%, -50%)"
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor={glassColor}
      color={color}
    />
  );
});

Spinner.defaultProps = {
  visible: true,
  height: 80,
  width: 80,
  glassColor: "white",
  color: "black"
};

Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Spinner;
