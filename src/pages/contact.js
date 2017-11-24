import React from 'react';
import Link from 'gatsby-link';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import Header from '../layouts/header';
import Content from '../layouts/content';
import Transition from '../components/transition';

class Contact extends React.Component {
  state = {
    width: null,
    in: true
  }
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth
    })
  }
  componentWillUnmount() {
    this.setState({
      in: false
    })
  }
  render() {
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition 
          timeout={300}
          classNames='swoop'
          shouldShow={this.state.in}
        >
          <div ref={node => this.container = node}>
            <Content>
              <h2>Contact</h2>
            </Content>
          </div>
        </Transition>
      </section>
    )
  }
}

export default Contact;