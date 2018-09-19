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
          <span style={{ color: "#999", fontSize: "12px" }}>
            {props.users[props.oneComment.UserId - 1].username}
          </span>
          <span style={{ color: "#999", fontSize: "11px" }}>
            {" "}
            <span style={{ color: "#ccc", fontSize: "12px" }}>at</span>{" "}
            {props.oneComment.song_time}:
          </span>
        </Info>
        <Text>
          <span style={{ color: "#333", fontSize: "12px" }}>
            {props.oneComment.text}
          </span>
        </Text>
      </Content>
      <CreatedAt>
        <span style={{ color: "#999", fontSize: "11px" }}>
          {props.oneComment.time_created}
        </span>
      </CreatedAt>
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
  width: 525px;
  height: auto;
`;

const CreatedAt = styled.div`
  float: right;
  margin-left: 10px;
  font-size: 11px;
  white-space: nowrap;
  position: relative;
`;

const Info = styled.div`
  display: block;
`;
const Text = styled.div`
  display: block;
`;

export default CommentsEntry;
