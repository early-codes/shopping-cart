import './App.css';
import Nav from './components/nav/Nav'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'
import { OnSaleProvider } from './components/context'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {

  const [basket, setBasket] = useState(0)

  let data = []

  const getData = (_data) => {
    data = _data
  }

  const getBasket = (_basket) => {
    setBasket(_basket)
  }


  return (
    <Router>
      <OnSaleProvider>
        <div className="App">
          <Nav data={basket} />
          <Route path="/home" render={props => (<Home {...props} dataGetter={getData} basketGetter={getBasket} />)} />
          <Route path="/cart" render={props => (<Cart {...props} data={data} />)} />
        </div>
      </OnSaleProvider>
    </Router>
  );
}

export default App;
