import React from 'react';
import PropTypes from 'prop-types';
import { ZeroFeedback } from '../ZeroFeedback/ZeroFeedback';
export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      {total() ? (
        <div>
          <div>
            <span>Good: </span>
            <span>{good}</span>
          </div>
          <div>
            <span>Neutral: </span>
            <span>{neutral}</span>
          </div>
          <div>
            <span>Bad: </span>
            <span>{bad}</span>
          </div>
          <div>
            <span>Total: </span>
            <span>{total()}</span>
          </div>
          <div>
            <span>Positive feedback: </span>
            <span>{percentage()}%</span>
          </div>
        </div>
      ) : (
        <ZeroFeedback message={'There is no feedback'} />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  percentage: PropTypes.func,
};
