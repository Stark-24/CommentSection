import React from "react";
import CommentBar from "./CommentBar.jsx";
import ArtistInfo from "./ArtistInfo.jsx";
import Description from "./Description.jsx";
import Comments from "./Comments.jsx";
import styled from "styled-components";

const App = props => {
  return (
    <AppWrapper>
      <React.Fragment>
        {/* Top */}
        <CommentBar />
        {/* Bottom */}
        <BottomWrapper>
          <ArtistInfo />
          <Feed>
            <Description />
            <Comments />
          </Feed>
        </BottomWrapper>
      </React.Fragment>
    </AppWrapper>
  );
};
const AppWrapper = styled.div`
  border-right: 1px solid #f2f2f2;
  width: 560px;
  hieght: 700px;
  padding-right: 30px;
`;

const Feed = styled.div`
  width: 477px;
  height: 160px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 25px;
  margin-left: 20px;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default App;
