import React from "react";
import styled from "styled-components";
import TracksIcon from "../svg-components/relatedTracks.jsx";

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
              <img
                src="https://i.imgur.com/AHNjE1l.png"
                style={{ width: "16px", height: "12px" }}
              />
              <Stats>1,420</Stats>
            </Followers>
            <Tracks>
              <TracksIcon />
              <Stats>16</Stats>
            </Tracks>
          </MiniStatsArtist>
          <FollowButton>Follow</FollowButton>
          <ReportButton>
            <img
              src="https://i.imgur.com/GnG4T0y.png"
              style={{ width: "15px", height: "14px" }}
            />
            <span
              style={{
                fontSize: "11px",
                marginLeft: "5px",
                color: "#666",
                marginTop: "1px",
                position: "absolute"
              }}
            >
              Report
            </span>
          </ReportButton>
        </Info>
      </WrapperAboutRight>
    );
  }
}
const Info = styled.div``;
const WrapperAboutRight = styled.div`
  background: white;
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
const ReportButton = styled.div`
  margin-top: 30px;
  margin-left: 5px;
`;
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
const MiniStatsArtist = styled.div`
  display: flex;
`;
const Followers = styled.div`
  margin-top: 10px;
  display: block;
`;
const Tracks = styled.div`
  margin-left: 5px;
  margin-top: 10px;
  display: block;
`;
const FollowButton = styled.div`
  margin-top: 8px;
  border: 1px solid #f50;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 9px;
  width: 34px;
  height: 16px;
  background-color: #f50;
  color: #fff;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-family: Interstate, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans",
    Garuda, Verdana, Tahoma, sans-serif;
  font-size: 11px;
  display: block;
`;
const Stats = styled.div`
  width: auto;
  height: auto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 100;
  color: #999;
  display: inline;
  margin-top: 1px;
  margin-left: 3px;
  position: relative;
`;

export default ArtistInfo;
