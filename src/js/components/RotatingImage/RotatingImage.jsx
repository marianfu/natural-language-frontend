import React from 'react';
import { random } from 'lodash';
import images from 'assets/images';
import './styles.scss';

function getRandomImage(images, currentImage) {
  const randomNumber = random(images.length - 1);
  return (images[randomNumber] !== currentImage)
    ? images[randomNumber]
    : getRandomImage(images, currentImage);
}

class RotatingImage extends React.Component {

  state = {
    imagesKeys: [],
    currentImage: '',
  };

  componentDidMount() {
    this.setFirstImage();
  }

  setFirstImage = () => {
    const imagesKeys = Object.keys(images);
    const randomNumber = random(imagesKeys.length - 1);
    const currentImage = imagesKeys[randomNumber];

    this.setState({ imagesKeys, currentImage });
    setTimeout(this.getRandomImage, 3000);
  }

  getRandomImage = () => {
    const { currentImage, imagesKeys } = this.state;
    const newImage = getRandomImage(imagesKeys, currentImage);

    this.setState({ currentImage: newImage });
    setTimeout(this.getRandomImage, 3000);
  }

  render() {
    const currentImage = this.state.currentImage;
    const image = images[currentImage];

    return (
      <div className={this.props.className}>
        <img className='imagePosition' alt="coding" src={image} />
        {this.props.children}
      </div>
    )
  }
}

export default RotatingImage;