import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { TransitionGroup } from 'react-transition-group';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import ico from '../images/sd.png';
import Viewer from './viewer';

class IndexLayout extends React.Component {
  render() {
    return (
      <div className={outer}>
        <div className={inner}>
          <Helmet>
            <title>Skylar Denney</title>
            <meta charset='UTF-8'/>
            <meta name='description' content='The Portfolio of Skylar Denney'/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="shortcut icon" href={ico} type="image/x-icon"/>
            <link href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
          </Helmet>
          <TransitionGroup className={left}>
            {this.props.children()}
          </TransitionGroup>
          <section className={right}>
            <Viewer imageData={this.props.data} />
          </section>
        </div>
      </div>  
    )
  }
}

export default IndexLayout;

IndexLayout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query HeadshotImages {
    first: imageSharp(id: { regex: "/1020/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }      
    second: imageSharp(id: { regex: "/1200/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }      
    third: imageSharp(id: { regex: "/1217/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }      
    fourth: imageSharp(id: { regex: "/1265/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }      
  }
`

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const outer = css`
  ${flex};
  flex-direction: column;
  background: var(--turq);
  height: 100vh;
`
const inner = css`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    overflow: hidden;

  @media (min-width: 430px) {
    width: 90%;
    margin: 30px 0 30px 0;
    box-shadow: 6px 6px 40px rgba(100, 100, 100, .5);
  }
  
  @media (min-width: 1200px) {
    display: flex;
    margin: 0;
    height: 100%;
    width: 1200px;
    max-height: 600px;
  }
`
const left = css`
  overflow: scroll;
  background: white;
  height: 75vh;
  padding: 0 40px 0 40px;
  
  @media (min-width: 1200px) {
    margin: auto;
    height: 100%;
    width: 60%;
    padding: 0 40px 0 40px;
  }
  `
const right = css`
  height: 25vh;
  order: -1;
  
  @media (min-width: 1200px) {
    order: 0;
    width: 40%;
    height: auto;
  }
`
