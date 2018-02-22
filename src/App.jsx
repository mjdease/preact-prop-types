import preact from 'preact';

import Button from './Button.jsx';

export default class App extends preact.Component {
  render() {
    return (
      <div>
        <h4>Preact + Prop-Types</h4>
        <Button label="Test Button" style={{throwsPropTypeError: true}} />
        <Button label={`NODE_ENV: '${process.env.NODE_ENV}'`} style={{color: '#f00'}} />
      </div>
    );
  }
}
