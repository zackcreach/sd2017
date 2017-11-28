import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

// import { next, back } from '../helpers/carousel';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

class Viewer extends React.Component {
  constructor({ imageData }) {
    super();
    this.state = {
      gallery: Object.values(imageData),
      currentImageIndex: 0,
      show: true
    }
  }
  componentWillMount() {
    // setInterval(() => this.changeImage(), 2000);
  }
  renderImage() {
    const { gallery, currentImageIndex, show } = this.state;
    return (
      <Img sizes={gallery[currentImageIndex].sizes} key={gallery[currentImageIndex].sizes.src} className={imageStyle} />
    )
  }
  render() {
    const { gallery, currentImageIndex, show } = this.state;
    console.log(gallery[currentImageIndex].sizes.src);
    
    return (
      <div className={viewer} onClick={() => {
        this.setState({
          show: !this.state.show,
        });
      }}>
        <CSSTransition
          timeout={1000}
          classNames='slide'
          in={show}
          onExited={() => (
            this.setState({ 
              show: !this.state.show,
              currentImageIndex: currentImageIndex === (gallery.length - 1) ? 0 : currentImageIndex + 1,
            })
          )}
        >
          {this.renderImage()}
        </CSSTransition>
      </div>
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


// Map method

// class Viewer extends React.Component {
//   constructor({ imageData }) {
//     super();
//     this.state = {
//       gallery: Object.values(imageData),
//       currentImageIndex: 0,
//       show: true
//     }
//   }
//   componentWillMount() {
//     // setInterval(() => this.changeImage(), 2000);
//   }
//   renderImage() {
//     const { gallery, currentImageIndex, show } = this.state;
//     // show ? <p key={1}>TRUE</p> : <p key={2}>FALSE</p>
//     return (
//       gallery.map((image, i) => (
//         <CSSTransition
//           key={i} 
//           timeout={1000}
//           classNames='slide'
//           in={show}
//         >
//           <Img sizes={image.sizes} className={imageStyle} position='absolute' />
//         </CSSTransition>
//       ))
//     )

//   }
//   changeImage() {
//     const { gallery, currentImageIndex, show } = this.state;
//     this.setState({
//       show: !show,
//     });
//   }
//   render() {
//     const { gallery, currentImageIndex, show } = this.state;
//     return (
//       <div className={viewer} onClick={() => this.changeImage()}>
//         <TransitionGroup>
//           {this.renderImage()}
//         </TransitionGroup>
//       </div>
//     )
//   }
// }