import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Transition = ({ shouldShow, timeout, classNames, children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={timeout}
    classNames={classNames}
    in={shouldShow}
  >
    {children}
  </CSSTransition>
)

export default Transition;