import React from "react";
import styled from "styled-components";

const PlayStat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82.461 96"
      style={styles.playIconSize}
    >
      <defs />
      <g
        id="Symbol_11_1"
        data-name="Symbol 11 – 1"
        transform="translate(-165.769 -232)"
      >
        <path
          id="Path_14"
          data-name="Path 14"
          style={styles.playIcon}
          d="M3321,1630v-96l82.461,48.156Z"
          transform="translate(-3155.231 -1302)"
        />
      </g>
    </svg>
  );
};

const styles = {
  playIcon: {
    fill: "#999"
  },
  playIconSize: {
    width: "11px",
    height: "11px"
  }
};

export default PlayStat;
