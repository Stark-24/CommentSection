import React from "react";
import axios from "axios";
import CommentBar from "./CommentBar.jsx";
import ArtistInfo from "./ArtistInfo.jsx";
import Description from "./Description.jsx";
import Comments from "./Comments.jsx";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      users: []
    };
    this.fetchComments = this.fetchComments.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    console.log("Component Mounted");
    // this.fetchComments();
    this.fetchUsers();
  }

  fetchComments() {
    axios
      .get("/api/comments", { params: {} })
      .then(({ data }) =>
        this.setState({ comments: data }, () =>
          console.log("fetched comments from db", this.state.comments)
        )
      )
      .catch(err => console.log(err));
  }

  fetchUsers() {
    axios
      .get("/api/users", { params: {} })
      .then(({ data }) =>
        this.setState({ users: data }, () =>
          console.log("fetched users from db", this.state.users)
        )
      )
      .then(() => this.fetchComments())
      .catch(err => console.log(err));
  }

  render() {
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
              <Comments
                fetchComments={this.fetchComments}
                comments={this.state.comments}
                users={this.state.users}
              />
            </Feed>
          </BottomWrapper>
        </React.Fragment>
      </AppWrapper>
    );
  }
}
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
