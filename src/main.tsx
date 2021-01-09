import React from 'react';
import ReactDOM from 'react-dom'

const App: React.FC = () => {
  return (<h1>Hello world! Custom React!</h1>);
};

ReactDOM.render(<App />, document.getElementById('root'));