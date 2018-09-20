import React from "react";
import styled from "styled-components";

const RepostIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 139.896 89.075"
      style={styles.repostIconSize}
    >
      <defs />
      <g
        id="Symbol_9_1"
        data-name="Symbol 9 – 1"
        transform="translate(-260.104 -160)"
      >
        <path
          id="Path_9"
          data-name="Path 9"
          style={styles.repostIcon}
          d="M3259,1322l17.464,17.98h33.8v43.909H3293.7l25.517,25.186,25.683-25.186h-16.57v-44.572s-1.764-6.653-6.279-10.982-11.782-6.335-11.782-6.335Z"
          transform="translate(-2944.896 -1162)"
        />
        <path
          id="Path_10"
          data-name="Path 10"
          style={styles.repostIcon}
          d="M3259,1322l17.464,17.98h33.8v43.909H3293.7l25.517,25.186,25.683-25.186h-16.57v-44.572s-1.764-6.653-6.279-10.982-11.782-6.335-11.782-6.335Z"
          transform="translate(3605 1571.075) rotate(180)"
        />
      </g>
    </svg>
  );
};

const styles = {
  repostIcon: {
    fill: "#222"
  },
  repostIconSize: {
    width: "14px",
    height: "14px"
  }
};

export default RepostIcon;
