import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';

class Demo extends React.Component {
  state = {
    width: null
  }
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth
    })
  }
  render() {
    return (
      <div className={container} ref={node => this.container = node}>
        <div className={header__container}>
          <Header headerWidth={this.state.width} />
        </div>
        <div className={content__container}>
          <h2>actor. writer. yogi. cat video enthusiast.</h2>
          <p>Hey there and welcome to my website!</p>
          <p>I’m an actor local to Atlanta auditioning all over the Southeast, but I made my journey to the fantastic HOT-Lanta after a 5-year stint in Los Angeles where I received a Theater Arts degree from The American Academy of Dramatic Arts and studied at UCB, iO West, The Ivanna Chubbuck Studio, and various other schools around town.</p>
          <p>If you’d like to see what I do, I perform regularly on a House Team at Highwire Comedy, Co. here in Atlanta as well as on other teams like The Actor’s Worst Nightmare!</p>
          <p>Along with acting, I get together with a group of super savvy girls to collaborate on writing projects like sketches and screenplays each week.</p>
          <p>I also am an avid yogi that loves rock climbing and, as stated above…cat videos. Seriously. If you need a good laugh, I can hook you up.</p>
          <p>So peruse my site, feel free to get in contact with me if you have any questions, and have an awesome day!</p>
        </div>
      </div>  
    )
  }
}

export default Demo;

const container = css`
  
`
const header__container = css`
  
`
const content__container = css`
  padding: 120px 0 0 0;
`