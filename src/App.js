import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './components/Home'
import Product from './components/Product'
import Order from './components/Order'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <div className="App">
            <Route path="/" exact component={ Home } />
            <Route path="/products" component={ Product } />
            <Route path="/order/:id" component={ Order } />
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
