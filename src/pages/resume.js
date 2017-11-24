import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';
import Content from '../layouts/content';

class Resume extends React.Component {
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
      <div ref={node => this.container = node}>
        <Header headerWidth={this.state.width} />
        <Content>
          <h2>Resume</h2>
        </Content>
      </div>  
    )
  }
}

export default Resume;