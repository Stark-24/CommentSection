import React from "react";
import styled from "styled-components";

const CommentsEntry = props => {
  return (
    <CommentWrapper>
      <UserImage
        style={{
          borderRadius: "50%",
          backgroundImage: `url(${
            props.users[props.oneComment.UserId - 1].pic
          })`
        }}
      />
      <Content>
        <Info>
          <Username>
            {props.users[props.oneComment.UserId - 1].username}
          </Username>
          <span style={{ color: "#ccc", fontSize: "10px" }}> at</span>{" "}
          <SongTime>{props.oneComment.song_time}:</SongTime>
        </Info>
        <Text>
          <span style={{ color: "#333", fontSize: "13px" }}>
            {props.oneComment.text}
          </span>
        </Text>
      </Content>
      <Meta>
        <TimeCreated>{props.oneComment.time_created}</TimeCreated>
        <ReplyButton>
          <img
            src="https://i.imgur.com/0VlU9i0.png"
            style={{
              width: "15px",
              height: "15px",
              paddingRight: "10px",
              marginBottom: "5px",
              position: "absolute",
              display: "block"
            }}
          />
          <span style={{ fontSize: "10px" }}>Reply</span>
        </ReplyButton>
      </Meta>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  width: 660px;
  height: 40px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const UserImage = styled.div`
  border-radius: 50%;
  border-width: 1px;
  border-color: #e5e5e5;
  border-style: solid;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: 50% 50%;
  display: block;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  width: 550px;
  height: auto;
  margin-left: 5px;
`;

const Meta = styled.div`
  float: right;
  margin-left: 60px;
  font-size: 11px;
  white-space: nowrap;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: block;
  &:hover {
    cursor: pointer;
    color: #333;
  }
`;
const Text = styled.div`
  display: block;
  margin-bottom: 10px;
`;

const Username = styled.span`
  color: #999;
  font-size: 13px;
  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

const SongTime = styled.span`
  color: #999;
  font-size: 10px;
  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

const TimeCreated = styled.span`
  color: #999;
  font-size: 10px;
  text-align: right;
`;
const ReplyButton = styled.button`
  width: 60px;
  height: 30px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 25px;
  padding-right: 5px;
  border: 1px solid #e5e5e5;
  margin-top: 10px;
  background-color: #fff;
  display: block;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  &:hover {
    cursor: pointer;
    border-color: #c1c1c1;
  }
  outline: none;
  font-family: Lucida Sans, Lucida Sans Regular, Lucida Grande,
    Lucida Sans Unicode, Geneva, Verdana, sans-serif;
`;
export default CommentsEntry;
