import React from "react";
import styled from "styled-components";

const More = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96.988 28.926"
      style={styles.moreIconSize}
    >
      <defs />
      <g
        id="Symbol_12_1"
        data-name="Symbol 12 – 1"
        transform="translate(-303.012 -257.359)"
      >
        <circle
          id="Ellipse_10"
          data-name="Ellipse 10"
          style={styles.moreIcon}
          cx="14.463"
          cy="14.463"
          r="14.463"
          transform="translate(303.012 257.359)"
        />
        <circle
          id="Ellipse_11"
          data-name="Ellipse 11"
          style={styles.moreIcon}
          cx="14.463"
          cy="14.463"
          r="14.463"
          transform="translate(337.043 257.359)"
        />
        <circle
          id="Ellipse_12"
          data-name="Ellipse 12"
          style={styles.moreIcon}
          cx="14.463"
          cy="14.463"
          r="14.463"
          transform="translate(371.074 257.359)"
        />
      </g>
    </svg>
  );
};

const styles = {
  moreIcon: {
    fill: "#222"
  },
  moreIconSize: {
    width: "14px",
    height: "14px"
  }
};

export default More;
