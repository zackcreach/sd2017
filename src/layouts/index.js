import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { TransitionGroup } from "react-transition-group";

import "../styles/styles.scss";
import styled, { css } from "emotion";

import ico from "../images/sd.png";
import Viewer from "./viewer";

class IndexLayout extends React.Component {
  render() {
    return (
      <div className={container}>
        <Helmet>
          <title>Skylar Denney</title>
          <meta charset="UTF-8" />
          <meta name="description" content="The Portfolio of Skylar Denney" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href={ico} type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Quattrocento:400,700|Open+Sans:300,400|Oswald:200,300,400,500,600,700|Playfair+Display:400,400i,700"
            rel="stylesheet"
          />
        </Helmet>
        <TransitionGroup className={left}>
          {this.props.children()}
        </TransitionGroup>
        <section className={right}>
          <Viewer imageData={this.props.data} />
        </section>
      </div>
    );
  }
}

export default IndexLayout;

IndexLayout.propTypes = {
  children: PropTypes.func,
};

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
`;

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const container = css`
  display: flex;
  overflow: hidden;
  width: 100%;

  @media (min-width: 430px) {
    margin: 0 auto 0 auto;
    max-width: 1200px;
  }

  @media (min-width: 1200px) {
  }
`;

const left = css`
  padding: 0 25px 0 25px;
  flex: 2;

  @media (min-width: 430px) {
    padding: 0 40px 0 40px;
  }

  @media (min-width: 1200px) {
    height: 100%;
    flex: 2;
    padding: 0 40px 0 40px;
  }
`;
const right = css`
  position: relative;
  display: none;
  order: -1;
  flex: 1;

  @media (min-width: 1200px) {
    display: block;
    order: 0;
    flex: 1;
    width: 100%;
    height: 100vh;
  }
`;
