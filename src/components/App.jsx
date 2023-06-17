import { useState, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;

    // const options = { good, bad, neutral };
    // for (const key in options) {
    //   total += options[key];
    // }
    //АБО
    // const optionsData = [];
    // for (const key in options) {
    //   optionsData.push(options[key]);
    // }
    // const totalFeedback = optionsData.reduce((acc, currV) => acc + currV, 0);
    // return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const percentage = ((good / total) * 100).toFixed() + '%';

    return percentage;
  };

  const feedbackHandler = event => {
    const type = event.currentTarget.name;

    switch (type) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      default:
        return;
    }
  };

  const total = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={feedbackHandler}
        />
        <h3>Statistics</h3>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
