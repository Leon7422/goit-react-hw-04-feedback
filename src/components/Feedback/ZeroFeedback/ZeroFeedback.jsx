import PropTypes from 'prop-types';

export const ZeroFeedback = ({ message }) => {
  return <h3>{message}</h3>;
};

ZeroFeedback.propTypes = {
  message: PropTypes.string,
};
