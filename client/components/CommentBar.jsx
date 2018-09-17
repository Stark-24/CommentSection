import React from "react";
import axios from "axios";
import styled from "styled-components";
import LikeIcon from "../svg-components/LikeIcon.jsx";

class CommentBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      comments: []
    };
    this.fetchComments = this.fetchComments.bind(this);
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
      .post("/api/comments", { text: text })
      .then(this.fetchComments())
      .catch(err => console.log(err));
    e.target.reset();
  }

  fetchComments() {
    axios
      .get("/api/comments", { params: {} })
      .then(({ data }) =>
        this.setState({ comments: data }, () =>
          console.log(this.state.comments)
        )
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <WrapperCommentEngagement>
        <div>
          {/* top-part*/}
          <WrapperCommentForm>
            {/* Avatar */}
            <Avatar>
              <span
                // style="background-image:url(https://i1.sndcdn.com/avatars-000500102301-r0y8lg-t120x120.jpg);width:40px;height:40px;"
                class="sc-artwork sc-artwork-placeholder-2"
                aria-label="Alaa Hussein’s avatar"
                aria-role="img"
              >
                Image
              </span>
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
                <LikeIcon />
              </Button>
              <Button>repost</Button>
              <Button>share</Button>
              <Button>more</Button>
            </WrapperButtonToolBar>
            {/* right buttons */}
            <WrapperListenEngagement>
              <MiniStats>
                <Plays>
                  <Icon />
                  <Stats>16.6K</Stats>
                </Plays>
              </MiniStats>

              <MiniStats>
                <Likes>
                  <Icon />
                  <Stats>226</Stats>
                </Likes>
              </MiniStats>

              <MiniStats>
                <Reposts>
                  <Icon />
                  <Stats>22</Stats>
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
  background: orange;
  display: flex;
  width: 557px;
  height: 83px;
  border: 1px solid #fff;
  padding-bottom: 4px;
  margin-bottom: 1px;
  box-shadow: 0 1px 0 0 #f2f2f2;
`;

const WrapperCommentForm = styled.div`
  background: blue;
  display: flex;
  width: 545px;
  height: 28px;
  padding: 5px;
  border: 1px solid #e5e5e5;
  margin: 0px;
`;

const Avatar = styled.div`
  background: green;
  display: block;
  width: 40px;
  height: 40px;
`;

const WrapperButtonToolBar = styled.div`
  background: yellow;
  display: block;
  width: 139px;
  height: 33px;
`;

const CommentInput = styled.input`
  background: grey;
  display: block;
  width: 485px;
  height: 25px;
  border: 1px solid;
  padding-left: 9px;
  padding-right: 9px;
`;

const WrapperListenEngagement = styled.div`
  background: pink;
  display: flex;
  width: 418px;
  height: 33px;
  flex-direction: row;
  justify-content: flex-end;
`;

const WrapperToolBarAndListenEngagement = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 1px solid #e5e5e5;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 11px;
  width: 8px;
  height: 20px;
  background-color: #fff;
  font-size: 14px;
  margin-right: 5px;
`;

const MiniStats = styled.li`
  width: 52px;
  height: 33px;
  list-style: none;
  display: block;
`;

const Plays = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 52px;
  height: 16px;
  display: block;
`;

const Likes = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 13px;
  width: 41.5px;
  height: 16px;
  display: block;
`;

const Icon = styled.span`
  width: 16px;
  height: 16px;
  display: block;
`;

const Stats = styled.span`
  width: auto;
  height: auto;
  font-size: 12px;
  line-height: 16px;
  font-weight: 100;
  color: #999;
  display: block;
`;

const Reposts = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 13px;
  width: 34px;
  height: 16px;
  display: block;
`;

export default CommentBar;
