import React from 'react';
import ReactDOM from 'react-dom';
import Laundry from './components/laundry.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }


  render () {
    return (
      // <h1> Smart Wash</h1>
        <Laundry />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
