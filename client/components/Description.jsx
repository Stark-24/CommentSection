import React from "react";
import styled from "styled-components";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <span>
          <h3>Release date: </h3>
          26 October 2017
        </span>
        <span>
          <h3>C-line:</h3>© 2017 Island Records, a division of Universal Music
          Operations Limited
        </span>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  float: right;
  display: block;
  font-size: 12px;
`;

export default Description;
