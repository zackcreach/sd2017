import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Logo from '../components/logo';
import Navigation from '../components/navigation';
import Transition from '../components/transition';

class IndexPage extends React.Component {
  state = {
    in: true
  }
  componentWillUnmount() {
    this.setState({
      in: false
    })
  }
  render() {
    return (
      <Transition 
        timeout={300}
        classNames='swoop'
        shouldShow={this.state.in}
      >
        <div className={index}>
          <div className={logo__container}>
            <Logo />
          </div>
          <div className={navigation__container}>
            <Navigation dots />
          </div>
        </div>
      </Transition>
    )
  }
}

export default IndexPage;

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const index = css`
  ${flex};
  flex-direction: row;
  height: 100%;
`
const logo__container = css`
  display: flex;
  font-size: 7rem;
  line-height: .9;
  text-align: center;
  text-shadow: 3px 3px 0px rgba(200, 200, 200,.25);
`
const navigation__container = css`
  font-size: 1.5rem;

  & > ul {
    flex-direction: column;
  }

  @media (min-width: 380px) {
    width: 350px;
    height: 300px;    
  }
`