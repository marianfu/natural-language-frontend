import React from 'react';
import TypeWriter from 'react-typewriter';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  handleTypingEnd(elem) {
    console.log(elem);
  }

  render() {

    return (
      <div>
        <div>
          <TypeWriter typing={1} onTypingEnd={this.handleTypingEnd}>
            Read text.
          </TypeWriter>
          <TypeWriter typing={0}>
            Write text.
          </TypeWriter>
          <TypeWriter typing={0}>
            Learn code.
          </TypeWriter>
        </div>
      </div>
    );
  }
}

export default Home;

