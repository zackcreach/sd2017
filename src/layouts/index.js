import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/styles.scss';
import styled, { css } from 'emotion';

import ico from '../images/sd.png';
import Viewer from '../components/viewer';

const IndexLayout = ({ children, data }) => (
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
      <section className={left}>
        {children()}
      </section>
      <section className={right}>
        <Viewer imageData={data} />
      </section>
    </div>
  </div>
)

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
  height: 100%;
  width: 85%;
  min-width: 1200px;
  max-height: 600px;
  box-shadow: 6px 6px 40px rgba(100, 100, 100, .5);
`
const left = css`
  width: 60%;
  padding: 0 40px 0 40px;
  background: white;
  overflow: scroll;
`
const right = css`
  width: 40%;
`
