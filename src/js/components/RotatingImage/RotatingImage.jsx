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

  getRandomImageId() {
    const min = 0;
    const max = this.props.images.length;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  setRandomImg() {
    this.setState({
      currentImage: this.getRandomImageId()
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