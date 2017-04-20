import React from 'react';
import NanoSpinner from './components/simple-spinner/NanoSpinner.jsx';
import '../styles/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It Works!</h1>
        <p>This React project just works including <span className="redBg">module</span> local styles.</p>
        <p>Enjoy2!</p>
          <NanoSpinner></NanoSpinner>
      </div>
    )
  }
}

