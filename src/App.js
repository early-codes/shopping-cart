import './App.css';
import Nav from './components/nav/Nav'
import Cart from './components/cart/Cart'
import Home from './components/home/Home'

import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/home" component={Home} />
      <Route path="/cart" component={Cart} />
    </div>
    </Router>
  );
}

export default App;
