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
          <span style={{ marginLeft: "5px" }}>6 Comments</span>
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
        </CommentsList>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: block;
`;

const Seperator = styled.div`
  border-bottom: 1px solid #f2f2f2;
  margin-top: 15px;
  padding-bottom: 5px;
`;

const CommentsList = styled.div``;

export default Comments;
