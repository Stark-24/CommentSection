import React from "react";
import styled from "styled-components";

const RepostStat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 139.896 89.075"
      style={styles.repostStatIconSize}
    >
      <defs />
      <g
        id="Symbol_10_1"
        data-name="Symbol 10 – 1"
        transform="translate(-31 -240)"
      >
        <path
          id="Path_11"
          data-name="Path 11"
          style={styles.repostStatIcon}
          d="M3259,1322l17.464,17.98h33.8v43.909H3293.7l25.517,25.186,25.683-25.186h-16.57v-44.572s-1.764-6.653-6.279-10.982-11.782-6.335-11.782-6.335Z"
          transform="translate(-3174 -1082)"
        />
        <path
          id="Path_12"
          data-name="Path 12"
          style={styles.repostStatIcon}
          d="M3259,1322l17.464,17.98h33.8v43.909H3293.7l25.517,25.186,25.683-25.186h-16.57v-44.572s-1.764-6.653-6.279-10.982-11.782-6.335-11.782-6.335Z"
          transform="translate(3375.896 1651.075) rotate(180)"
        />
      </g>
    </svg>
  );
};

const styles = {
  repostStatIcon: {
    fill: "#999"
  },
  repostStatIconSize: {
    width: "14px",
    height: "14px",
    marginTop: "2px"
  }
};

export default RepostStat;
