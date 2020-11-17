import './App.css';
import Nav from './components/nav/Nav'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  let data = []

  const getData = (_data) => {
    data = _data
    
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/home" render={props => (<Home {...props} dataGetter={getData} />)} />
        <Route path="/cart" render={props => (<Cart {...props} data={data} />)} />
      </div>
    </Router>
  );
}

export default App;
