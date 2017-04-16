import React from 'react';

class RotatingImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0
    };

    this.getRandomImageId = this.getRandomImageId.bind(this);
    this.setRandomImg = this.setRandomImg.bind(this);
  }

  getRandomImageId(previousValue) {
    const min = 0;
    const max = this.props.images.length;
    let rand = Math.floor(Math.random() * (max - min)) + min;
    while (rand == previousValue) {
      rand = Math.floor(Math.random() * (max - min)) + min;
    }
    return rand;
  }

  setRandomImg() {
    var self = this;
    self.setState((previousState) => {
      return {
        currentImage: self.getRandomImageId(previousState.currentImage)
      };
    });
    setTimeout(this.setRandomImg, 3000);
  }

  componentDidMount () {
    this.setRandomImg();
  }

  render () {
    var style = {
      backgroundImage: 'url(' + this.props.images[this.state.currentImage] + ')'
    };
    
    return (
      <div style={style} className={this.props.className}>
        { this.props.children }
      </div>
    )
  }

}

export default RotatingImage;