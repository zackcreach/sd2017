import React from "react";
import Link from "gatsby-link";
import Navigation from "../components/navigation";

import "../styles/styles.scss";
import styled, { css } from "emotion";

const Logo = () => (
  <Link to="/">
    <div className={logo}>Skylar Denney</div>
  </Link>
);

export default Logo;

const logo = css`
  font-family: var(--fontPrimary);
  font-weight: 400;
  color: white;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;
