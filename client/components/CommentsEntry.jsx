import React from "react";
import styled from "styled-components";

const CommentsEntry = props => {
  return (
    <CommentWrapper>
      <UserImage>
        <img
          src={props.users[props.oneComment.UserId - 1].pic}
          style={{ borderRadius: "50%" }}
        />
      </UserImage>
      <Content>
        <p>{props.users[props.oneComment.UserId - 1].username}</p>
        <p>at {props.oneComment.song_time}</p>
        <p>{props.oneComment.time_created}</p>
        <p>{props.oneComment.text}</p>
      </Content>
      <Meta />
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  width: 660px;
  height: 40px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const UserImage = styled.div`
  border-radius: 50%;
  border-weight: 2px;
  width: 40px;
  height: 40px;
  background-color: red;
`;
const Content = styled.div``;
const Meta = styled.div``;

export default CommentsEntry;
