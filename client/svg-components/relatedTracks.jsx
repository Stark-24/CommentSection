import React from "react";
import styled from "styled-components";

const relatedTracks = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 88 88"
      style={styles.relatedTrackSize}
    >
      <defs />
      <g
        id="Symbol_2_1"
        data-name="Symbol 2 – 1"
        transform="translate(-24 -152)"
      >
        <rect
          id="Rectangle_194"
          data-name="Rectangle 194"
          style={styles.relatedTrack}
          width="8"
          height="18"
          transform="translate(24 190)"
        />
        <rect
          id="Rectangle_195"
          data-name="Rectangle 195"
          styles={styles.relatedTrack}
          width="8"
          height="60"
          transform="translate(44 168)"
        />
        <rect
          id="Rectangle_196"
          data-name="Rectangle 196"
          style={styles.relatedTrack}
          width="8"
          height="88"
          transform="translate(64 152)"
        />
        <rect
          id="Rectangle_197"
          data-name="Rectangle 197"
          style={styles.relatedTrack}
          width="8"
          height="40"
          transform="translate(84 176)"
        />
        <rect
          id="Rectangle_198"
          data-name="Rectangle 198"
          style={styles.relatedTrack}
          width="8"
          height="18"
          transform="translate(104 190)"
        />
      </g>
    </svg>
  );
};

const styles = {
  relatedTrack: {
    fill: "#333"
  },
  relatedTrackSize: {
    width: "16px",
    height: "12px"
  }
};

export default relatedTracks;
