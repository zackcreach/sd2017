import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { next, back } from '../helpers/carousel';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

const Viewer = ({ imageData }) => (
  <div className={viewer}>
    {next()}
    {back()}
    {console.log(imageData)}
    <Img sizes={imageData.first.sizes} />
  </div>
)

export default Viewer;

const viewer = css`
  height: 100%;
  width: 100%;
  /* background: red; */
  overflow: hidden;
`