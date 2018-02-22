import preact from 'preact';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

// Test component that specifies prop-types
export default class Button extends preact.Component {
  render(props) {
    return <button style={props.style}>{props.label}</button>;
  }
}

// Button prop-types
Button.propTypes = {
  label: PropTypes.string.isRequired,
  style: stylePropType,
};