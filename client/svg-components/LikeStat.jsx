import React from "react";
import styled from "styled-components";

const LikeStat = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 98.57 84.216"
      style={styles.likeStatSize}
    >
      <defs />
      <g
        id="Symbol_6_1"
        data-name="Symbol 6 – 1"
        transform="translate(-227.903 -155.786)"
      >
        <path
          id="Path_4"
          data-name="Path 4"
          style={styles.likeStat}
          d="M3280.053,1455.412c-79.429-40.55-39.053-78.987-39.053-78.987s12.321-7.524,22.321-4.424c3.9,1.209,7.447,4.245,10.517,7.721a61.164,61.164,0,0,1,6.755,9.18Z"
          transform="translate(-3002.836 -1215.465)"
        />
        <path
          id="Path_5"
          data-name="Path 5"
          style={styles.likeStat}
          d="M3232.156,1455.467c79.508-40.55,39.1-79.043,39.1-79.043s-12.333-7.524-22.343-4.424c-3.9,1.209-7.454,4.245-10.528,7.721a57.786,57.786,0,0,0-6.7,9.18Z"
          transform="translate(-2955.049 -1215.465)"
        />
      </g>
    </svg>
  );
};

const styles = {
  likeStat: {
    fill: "#999"
  },
  likeStatSize: {
    width: "11px",
    height: "11px"
  }
};

export default LikeStat;
