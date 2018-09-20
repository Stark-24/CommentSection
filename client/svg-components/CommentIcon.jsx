import React from "react";
import styled from "styled-components";

const CommentIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 101 100.242"
      style={styles.commentIconSize}
    >
      <defs />
      <g
        id="Symbol_29_1"
        data-name="Symbol 29 – 1"
        transform="translate(-592 -117)"
      >
        <g
          id="Rectangle_217"
          data-name="Rectangle 217"
          style={styles.commentIconSize}
          transform="translate(592 117)"
        >
          <rect style={styles.commentIcon2} width="101" height="71" rx="24" />
          <rect
            style={styles.commentIcon3}
            x="0.5"
            y="0.5"
            width="100"
            height="70"
            rx="23.5"
          />
        </g>
        <path
          id="Path_36"
          data-name="Path 36"
          style={styles.commentIconSize}
          d="M3646.106,1467v28L3673,1467Z"
          transform="translate(-3033 -1279)"
        />
      </g>
    </svg>
  );
};

const styles = {
  commentIconSize: {
    fill: "#999",
    stroke: "#999"
  },
  commentIcon2: {
    stroke: "none"
  },
  commentIcon3: {
    fill: "none"
  },
  commentIconSize: {
    width: "14px",
    height: "14px"
  }
};

export default CommentIcon;
