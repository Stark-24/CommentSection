import React from "react";
import axios from "axios";
import Comments from "../components/Comments.jsx";
import styled from "styled-components";
import LikeIcon from "../svg-components/LikeIcon.jsx";
import LikeStat from "../svg-components/LikeStat.jsx";
import RepostIcon from "../svg-components/RepostIcon.jsx";
import ShareIcon from "../svg-components/ShareIcon.jsx";
import More from "../svg-components/More.jsx";
import PlayStat from "../svg-components/PlayStat.jsx";
import RepostsStat from "../svg-components/RepostsStat.jsx";

class CommentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value
    });
    console.log(this.state.text);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    console.log(this.state.text);
    axios
      .post("http://54.183.1.8:9003/api/comments", {
        id: this.props.comments.length + 1,
        text: text
      })
      .then(this.props.fetchComments())
      .catch(err => console.log(err));
    e.target.reset();
  }

  render() {
    return (
      /* COMMENT ENGAGEMENT */
      <WrapperCommentEngagement>
        <div>
          {/* top-part*/}
          <WrapperCommentForm>
            {/* Avatar */}
            <Avatar>
              <img
                src="https://i.imgur.com/GzIKhyY.png"
                style={{ width: "40px", height: "40px" }}
              />
            </Avatar>
            {/* comment-form */}
            <Form onSubmit={e => this.handleSubmit(e)}>
              <CommentInput
                type="text"
                title="Write a comment"
                placeholder="Write a comment"
                // value=""
                onKeyUp={this.handleInput}
              />
            </Form>
          </WrapperCommentForm>

          {/* bottom-part */}
          <WrapperToolBarAndListenEngagement>
            <WrapperButtonToolBar>
              {/* left buttons*/}
              <Button>
                <Icon>
                  <LikeIcon />
                  <ButtonHeader>Like</ButtonHeader>
                </Icon>
              </Button>
              <Button>
                <Icon>
                  <RepostIcon />
                  <ButtonHeader>Repost</ButtonHeader>
                </Icon>
              </Button>
              <Button>
                <Icon>
                  <ShareIcon />
                  <ButtonHeader>Share</ButtonHeader>
                </Icon>
              </Button>
              <Button>
                <Icon>
                  <More />
                  <ButtonHeader>More</ButtonHeader>
                </Icon>
              </Button>
            </WrapperButtonToolBar>
            {/* right buttons */}
            <WrapperListenEngagement>
              <MiniStats>
                <Plays>
                  {" "}
                  <PlayStat />
                  <Stats> 16.6K</Stats>
                </Plays>
              </MiniStats>

              <MiniStats>
                <Likes>
                  <LikeStat /> <Stats>226</Stats>
                </Likes>
              </MiniStats>

              <MiniStats>
                <Reposts>
                  <RepostsStat />
                  <Stats> 22</Stats>
                </Reposts>
              </MiniStats>
            </WrapperListenEngagement>
          </WrapperToolBarAndListenEngagement>
        </div>
      </WrapperCommentEngagement>
    );
  }
}
const Form = styled.form``;

const WrapperCommentEngagement = styled.div`
  background: white;
  display: flex;
  width: 817px;
  height: 83px;
  border: 1px solid #fff;
  padding-bottom: 5px;
  margin-bottom: 1px;
  box-shadow: 0 1px 0 0 #f2f2f2;
`;

const WrapperCommentForm = styled.div`
  background: blue;
  display: flex;
  width: 805px;
  height: 28px;
  padding: 5px;
  border: 1px solid #e5e5e5;
  margin: 0px;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(242, 242, 242);
`;

const Avatar = styled.div`
  background: white;
  display: flex;
  margin-left: -5px;
  margin-top: -5px;
  width: 40px;
  height: 40px;
`;

const WrapperButtonToolBar = styled.div`
  background: white;
  display: block;
  width: 321px;
  height: 33px;
`;

const CommentInput = styled.input`
  background: #fff;
  width: 745px;
  height: 25px;
  margin-left: 5px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding-left: 9px;
  padding-right: 9px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-weight: 400;
  font-stretch: normal;
  font-size: 14px;
  font-family: inherit;
  outline: none;
  &:active {
    cursor: pointer;
    border-color: #c1c1c1;
  }
`;

const WrapperListenEngagement = styled.div`
  background: white;
  display: flex;
  width: 496px;
  height: 33px;
  flex-direction: row;
  justify-content: flex-end;
`;

const WrapperToolBarAndListenEngagement = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 75px;
  height: 25px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 11px;
  border: 1px solid #e5e5e5;
  margin-right: 5px;
  margin-top: 10px;
  background-color: #fff;
  display: inline;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  &:hover {
    cursor: pointer;
    border-color: #c1c1c1;
  }
  &:active {
    cursor: click;
    border-color: #f50;
  }
  outline: none;
`;

const MiniStats = styled.li`
  width: 52px;
  height: 33px;
  list-style: none;
  display: inline;
  margin-top: 10px;
`;

const Plays = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 52px;
  height: 16px;
  display: inline;
`;

const Likes = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 13px;
  width: 41.5px;
  height: 16px;
  display: inline;
`;

const Icon = styled.span`
  width: 20px;
  height: 20px;
  margin-left: -5px;
  margin-top: 2px;
  left: 4px;
  right: 5px;
  display: block;
`;

const Stats = styled.span`
  width: auto;
  height: auto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 100;
  color: #999;
  display: inline;
  margin-top: 1px;
  margin-left: 3px;
  position: absolute;
  &:hover {
    cursor: pointer;
    color: #333;
  }
`;

const ButtonHeader = styled.span`
  width: auto;
  height: auto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  color: #333;
  display: inline;
  margin-left: 6px;
  position: absolute;
`;

const Reposts = styled.span`
  margin-top: -5px;
  margin-bottom: 0px;
  margin-left: 13px;
  width: 34px;
  height: 16px;
  display: inline;
`;

export default CommentBar;
