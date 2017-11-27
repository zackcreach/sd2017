import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

// import { next, back } from '../helpers/carousel';
import { TransitionGroup } from 'react-transition-group';
import Transition from '../components/transition';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

class Viewer extends React.Component {
  constructor({ imageData }) {
    super();
    this.state = {
      gallery: Object.values(imageData),
      currentImageIndex: 0,
      in: false
    }
  }
  componentWillMount() {
    // setInterval(() => this.changeImage(), 2000);
  }
  componentWillUnmount() {
    this.setState({
      in: false
    })
  }
  renderImage() {
    const { gallery, currentImageIndex } = this.state;
    return (
      <Transition 
        timeout={300}
        classNames='slide'
        shouldShow={!this.state.in}
      >
        <Img sizes={gallery[currentImageIndex].sizes} className={imageStyle} />
      </Transition>
    )
  }
  changeImage() {
    const { gallery, currentImageIndex } = this.state;
    this.setState({
      currentImageIndex: currentImageIndex === (gallery.length - 1) ? 0 : currentImageIndex + 1
    });
    this.renderImage();
  }
  render() {
    return (
      <TransitionGroup className={viewer} onClick={() => this.changeImage()}>
        {this.renderImage()}
      </TransitionGroup>
    )
  }
}

export default Viewer;

const viewer = css`
  height: 100%;
  width: 100%;
  /* background: red; */
  /* display: inline-block; */
  overflow: hidden;
`
const imageStyle = css`
  /* display: inline; */
`