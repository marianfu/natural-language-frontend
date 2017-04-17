import React from 'react';
import TypeWriter from 'react-typewriter';
import RotatingImage from 'js/components/RotatingImage';
import { debounce } from 'lodash';
import './styles.scss';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      writers: [1, 0, 0]
    };
    this.handleTypingEnd = debounce(this.handleTypingEnd.bind(this), 800);
  }

  static defaultProps = {
    images: [
      'assets/images/0.gif',
      'assets/images/1.gif',
      'assets/images/2.gif',
      'assets/images/3.gif',
      'assets/images/4.gif',
      'assets/images/5.gif'
    ]
  }

  handleTypingEnd() {
    this.setState((previousState) => {
      var next = false;
      for (var i = 0; i < previousState.writers.length; i++) {
        if (previousState.writers[i] == 1) {
          previousState.writers[i] = -1;
          break;
        } else if (previousState.writers[i] == -1) {
          previousState.writers[i] = 0;
          next = true;
        } else if (next) {
          previousState.writers[i] = 1;
          next = false;
          break;
        }
      }

      if (next) {
        previousState.writers[0] = 1;
      }

      return {
        writers: previousState.writers
      };
    });
  }

  render() {

    return (
      <RotatingImage images={this.props.images} className="typewriter">
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <TypeWriter typing={this.state.writers[0]} onTypingEnd={this.handleTypingEnd} maxDelay={50}>
                Read text.
              </TypeWriter>
              <TypeWriter typing={this.state.writers[1]} onTypingEnd={this.handleTypingEnd} maxDelay={50}>
                Write text.
              </TypeWriter>
              <TypeWriter typing={this.state.writers[2]} onTypingEnd={this.handleTypingEnd} maxDelay={50}>
                Learn code.
              </TypeWriter>
            </div>
          </div>
        </div>
      </RotatingImage>
    );
  }
}

export default Home;

