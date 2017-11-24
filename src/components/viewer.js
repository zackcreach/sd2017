import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { CSSTransitionGroup } from 'react-transition-group';

import { next, back } from '../helpers/carousel';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

class Viewer extends React.Component {
  constructor({ imageData }) {
    super();
    this.state = {
      currentImage: imageData[1]
    }
  }
  componentWillMount() {
    console.log(this.state.currentImage);
  }
  render() {
    let { currentImage } = this.state;
    return (
      <div className={viewer}>
        {/* <Img sizes={this.state.currentImage.sizes} /> */}
      </div>
    )
  }
}

export default Viewer;

const viewer = css`
  height: 100%;
  width: 100%;
  /* background: red; */
  overflow: hidden;
`