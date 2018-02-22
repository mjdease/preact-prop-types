import preact from 'preact';
import PropTypes from 'prop-types';

// Test component that specifies prop-types
export default class Button extends preact.Component {
  render(props) {
    return <button>{props.label}</button>;
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};