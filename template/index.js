const React = require('react');
const ReactDOM = require('react-dom');
const history = require('./history.json');

console.log('history', history);

const App = () => <div>This is an app mate</div>;

ReactDOM.render(<App />, document.getElementById('root'));
