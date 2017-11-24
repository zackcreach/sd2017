import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

const Content = (props) => (
  <div className={content}>
    {props.children};
  </div>
)

export default Content;

const content = css`
  padding: 110px 0 0 0;
`