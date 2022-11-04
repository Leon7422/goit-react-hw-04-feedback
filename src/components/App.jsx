import React from 'react';
import { useState } from 'react';
import { Statistics } from './Feedback/Statistics/Statistics';
import { FeedbackOptions } from './Feedback/Buttons/Buttons';
import { Section } from './Feedback/Section/Section';

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = options => {
    setState(prevState => {
      return { ...prevState, [options]: prevState[options] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (
      (state.good / (state.good + state.neutral + state.bad)) *
      100
    ).toFixed(0);
    if (isNaN(positivePercentage)) {
      return 0;
    }
    return positivePercentage;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          total={countTotalFeedback}
          percentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}
