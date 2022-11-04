import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node,
};
