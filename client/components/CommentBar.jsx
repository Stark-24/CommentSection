import React from "react";
import axios from "axios";

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
      <div>
        {/* top-part*/}
        <div>
          {/* Avatar */}
          <div>
            <span
              // style="background-image:url(https://i1.sndcdn.com/avatars-000500102301-r0y8lg-t120x120.jpg);width:40px;height:40px;"
              class="sc-artwork sc-artwork-placeholder-2"
              aria-label="Alaa Hussein’s avatar"
              aria-role="img"
            >
              Image
            </span>
          </div>
          {/* comment-form */}
          <div>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input
                type="text"
                title="Write a comment"
                placeholder="Write a comment"
                // value=""
                class="commentForm"
                onKeyUp={this.handleInput}
              />
            </form>
          </div>
        </div>

        {/* bottom-part */}
        <div>
          {/* left buttons*/}
          <div>
            <div>
              <button>like</button>
            </div>
            <div>
              <button>repost</button>
            </div>
            <div>
              <button>share</button>
            </div>
            <div>
              <button>more</button>
            </div>
            <div>
              <button>buy</button>
            </div>
          </div>
          {/* right buttons */}
          <div>
            <div>
              <span>Views</span>
            </div>
            <div>
              <span>Likes</span>
            </div>
            <div>
              <span>Reposts</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentBar;
