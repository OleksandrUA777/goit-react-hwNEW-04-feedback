import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const types = [];
  for (const key in options) {
    types.push(key);
  }

  return (
    <ul>
      {types.map(type => {
        return (
          <li key={type}>
            <button onClick={onLeaveFeedback} name={type}>
              {type}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
};
