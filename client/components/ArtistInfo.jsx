import React from "react";
import styled from "styled-components";

class ArtistInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      /* About Right */
      <WrapperAboutRight>
        {/* Artist Image */}
        <ArtistImg />
        {/* Artist Info */}
        <Info>
          {/* Artist Name */}
          <ArtistName />
          <Name>Tupac Shakur</Name>
          {/* Artist Stats */}
          <MiniStatsArtist>
            <Followers>
              <FollowersIcon />
              <Stats />
            </Followers>
            <Tracks />
            <FollowButton />
          </MiniStatsArtist>
        </Info>
      </WrapperAboutRight>
    );
  }
}

const WrapperAboutRight = styled.div`
  background: red;
  width: 120px;
  height: 250px;
  margin-top: 20px;
`;
const ArtistImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url("https://i.imgur.com/7uUMgbF.png");
  background-size: cover;
  background-position: 50% 50%;
`;
const Info = styled.div``;
const ArtistName = styled.div`
  width: 120;
  height: 18px;
  margin-top: -12px;
`;
const Name = styled.span`
  width: auto;
  height: auto;
  font-weight: 100;
  font-size: 14px;
  color: #333;
`;
const MiniStatsArtist = styled.div``;
const Tracks = styled.div``;
const FollowButton = styled.div``;
const Followers = styled.div``;
const FollowersIcon = styled.div``;
const Stats = styled.div``;

export default ArtistInfo;
