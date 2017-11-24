import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Logo from '../components/logo'
import Navigation from '../components/navigation'

const Header = ({ headerWidth }) => (
  <div className={header} style={{width: headerWidth}}>
    <div className={logo__container}>
      <Logo />
    </div>
    <div className={navigation__container}>
      <Navigation dots/>
    </div>
  </div>
)

export default Header;

const header = css`
  position: fixed;
  display: flex;
  justify-content: space-between;  
  padding: 30px 0 30px 0;
  background: white;
`
const logo__container = css`
  font-size: 3rem;
  line-height: .9;
  /* text-shadow: 2px 2px 0px rgba(200, 200, 200,.4); */
`
const navigation__container = css`
  padding: 12px 0 0 0;
  font-size: 1.2rem;

  @media (min-width: 380px) {
    width: 300px;
  }
`