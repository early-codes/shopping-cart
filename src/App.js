import './App.css';
import Nav from './components/nav/Nav'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useEffect } from 'react';

function App() {

  let data = []
  let basket = 0


  const getData = (_data) => {
    data = _data
  }

  const getBasket = (_basket) => {
    basket = _basket
  }

  useEffect(() => {
    console.log(data)
  })

  return (
    <Router>
      <div className="App">
        <Nav data={data} />
        <Route path="/home" render={props => (<Home {...props} dataGetter={getData} basketGetter={getBasket} />)} />
        <Route path="/cart" render={props => (<Cart {...props} data={data} />)} />
      </div>
    </Router>
  );
}

export default App;
