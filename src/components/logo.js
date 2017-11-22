import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/navigation'

import '../styles/styles.scss';
import styled, { css } from 'emotion';

export default () => (
  <Link to="/">
    <h1 className={logo}>Skylar Denney</h1>
  </Link>
)

const logo = css`
  font-family: 'Lobster', Georgia, serif;
  font-style: normal;
  color: var(--turq);
`