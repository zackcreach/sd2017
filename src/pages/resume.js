import React from "react";
import Link from "gatsby-link";

import "../styles/styles.scss";
import styled, { css } from "emotion";

import Header from "../layouts/header";
import Content from "../layouts/content";
import Transition from "../components/transition";

class Resume extends React.Component {
  state = {
    width: null,
    in: true,
  };
  componentDidMount() {
    this.setState({
      width: this.container.offsetWidth,
    });
  }
  componentWillUnmount() {
    this.setState({
      in: false,
    });
  }
  render() {
    const { resume, tv, film, theater, training, skills } = this.props.data;
    return (
      <section>
        <Header headerWidth={this.state.width} />
        <Transition show={this.state.in}>
          <div ref={(node) => (this.container = node)}>
            <Content>
              <h2>Resume</h2>
              {resume.edges.map((item, index) => (
                <div className={row} key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item.node.name }} />
                  <span dangerouslySetInnerHTML={{ __html: item.node.role }} />
                  <span
                    dangerouslySetInnerHTML={{ __html: item.node.credit }}
                  />
                </div>
              ))}
              <h2 className={heading}>TV</h2>
              {tv.edges.map((item, index) => (
                <div className={row} key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item.node.name }} />
                  <span dangerouslySetInnerHTML={{ __html: item.node.role }} />
                  <span
                    dangerouslySetInnerHTML={{ __html: item.node.credit }}
                  />
                </div>
              ))}

              <h2 className={heading}>Film</h2>
              {film.edges.map((item, index) => (
                <div className={row} key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item.node.name }} />
                  <span dangerouslySetInnerHTML={{ __html: item.node.role }} />
                  <span
                    dangerouslySetInnerHTML={{ __html: item.node.credit }}
                  />
                </div>
              ))}

              <h2 className={heading}>Theater</h2>
              {theater.edges.map((item, index) => (
                <div className={row} key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item.node.name }} />
                  <span dangerouslySetInnerHTML={{ __html: item.node.role }} />
                  <span
                    dangerouslySetInnerHTML={{ __html: item.node.credit }}
                  />
                </div>
              ))}

              <h2 className={heading}>Training</h2>
              {training.edges.map((item, index) => (
                <div className={row} key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item.node.name }} />
                  <span dangerouslySetInnerHTML={{ __html: item.node.role }} />
                  <span
                    dangerouslySetInnerHTML={{ __html: item.node.credit }}
                  />
                </div>
              ))}

              <h2 className={heading}>Special Skills</h2>
              {skills.edges.map((item, index) => (
                <div className={row} key={index}>
                  <span dangerouslySetInnerHTML={{ __html: item.node.name }} />
                  <span dangerouslySetInnerHTML={{ __html: item.node.role }} />
                  <span
                    dangerouslySetInnerHTML={{ __html: item.node.credit }}
                  />
                </div>
              ))}
            </Content>
          </div>
        </Transition>
      </section>
    );
  }
}

const heading = css`
  padding: 45px 0 15px 0;
`;

const row = css`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  /* padding: 2px; */

  @media (min-width: 430px) {
    font-size: 1rem;
  }

  &:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.1);
  }

  & span:nth-of-type(1) {
    flex: 1 0 auto;
    text-align: left;
  }

  & span:nth-of-type(2) {
    flex: 0 1 16%;
    text-align: left;
  }

  & span:nth-of-type(3) {
    flex: 0 1 42%;
    text-align: right;
  }

  p {
    padding: 0;
  }
`;

const rowAstrisk = css`
  display: flex;
  justify-content: flex-end;
`;

export default Resume;

export const resumesQuery = graphql`
  query ResumesQuery {
    resume: allResumes(
      filter: { type: { eq: "Resume" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
          updatedAt
          isPublished
          id
          type
          name
          role
          credit
        }
      }
    }
    tv: allResumes(
      filter: { type: { eq: "Tv" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
          updatedAt
          isPublished
          id
          type
          name
          role
          credit
        }
      }
    }
    film: allResumes(
      filter: { type: { eq: "Film" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
          updatedAt
          isPublished
          id
          type
          name
          role
          credit
        }
      }
    }
    theater: allResumes(
      filter: { type: { eq: "Theater" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
          updatedAt
          isPublished
          id
          type
          name
          role
          credit
        }
      }
    }
    training: allResumes(
      filter: { type: { eq: "Training" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
          updatedAt
          isPublished
          id
          type
          name
          role
          credit
        }
      }
    }
    skills: allResumes(
      filter: { type: { eq: "Skills" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          createdAt
          updatedAt
          isPublished
          id
          type
          name
          role
          credit
        }
      }
    }
  }
`;
