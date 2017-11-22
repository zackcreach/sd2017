import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

export default (props) => (
  <ul className={navigation}>
    <li>
      <Link to="/about">
        About
      </Link>
    </li>
    {props.dots ? <span>·</span> : ''}
    <li>
      <Link to="/resume">
        Resume
      </Link>
    </li>
    {props.dots ? <span>·</span> : ''}
    <li>
      <Link to="/demo">
        Demo
      </Link>
    </li>
    {props.dots ? <span>·</span> : ''}
    <li>
      <Link to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)

const navigation = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  & * {
    color: var(--turq);
  }
`