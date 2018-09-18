import React from "react";
import CommentBar from "./CommentBar.jsx";
import ArtistInfo from "./ArtistInfo.jsx";

const App = props => {
  return (
    <React.Fragment>
      <CommentBar />
      <ArtistInfo />
    </React.Fragment>
  );
};

export default App;
