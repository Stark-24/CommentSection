import React from "react";
import styled from "styled-components";
import CommentIcon from "../svg-components/CommentIcon.jsx";
import CommentsEntry from "./CommentsEntry.jsx";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Seperator>
          <CommentIcon />
          <span
            style={{
              marginLeft: "5px",
              fontSize: "14px",
              color: "#999",
              fontWeight: "100",
              fontFamily:
                "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans"
            }}
          >
            {this.props.comments.length} comments
          </span>
        </Seperator>
        <CommentsList>
          <div>
            {this.props.comments.map((comment, index) => {
              return (
                <CommentsEntry
                  users={this.props.users}
                  key={index}
                  oneComment={comment}
                  index={index}
                />
              );
            })}
          </div>
          <BottomBorder>
            <CloudImg />
          </BottomBorder>
        </CommentsList>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: block;
  width: 680px;
  height: 120px;
`;

const Seperator = styled.div`
  border-bottom: 1px solid #f2f2f2;
  margin-top: 25px;
  padding-bottom: 5px;
  width: 680px;
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
`;
const BottomBorder = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #f2f2f2;
`;
const CloudImg = styled.image`
  margin-bottom: 5px;
  content: "";
  position: absolute;
  top: 4017%;
  left: 70%;
  width: 30px;
  height: 18px;
  background-image: url("https://i.imgur.com/tXfMYi4.png");
  background-size: cover;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  border-bottom: inherit;
  border-bottom-color: transparent;
`;
export default Comments;
