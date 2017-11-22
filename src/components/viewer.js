import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { next, back } from '../helpers/carousel';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

export default class Viewer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className={viewer}>
        {next()}
        {back()}
        {/* <Img sizes={this.props.data.image1.sizes} /> */}
      </div>
    )
  }
}

export const query = graphql`
  query HeadshotImages {
    image1: imageSharp(id: { regex: "/FNL_Skylar-1020(WEB).jpg/" }) {
      sizes(maxWidth: 700) {
        ...GatsbyImageSharpSizes
      }
    }      
  }
`

const viewer = css`
  height: 100%;
  width: 100%;
  /* background: red; */
  overflow: hidden;
`