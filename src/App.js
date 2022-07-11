import React, { useState } from 'react';

// core components
import Nav from './components/Nav';
import Footer from './components/Footer';
import ItemPage from './components/pages/ItemPage';
import {items} from './js/static-data'

import './App.css';
import CartPage from './components/pages/CartPage';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const summarizeCart = cart => {
  const groupItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
          ...item, 
          count: 0
      };
      summary[item.id].count++;

      return summary;
  }, {});
  return Object.values(groupItems);

};

// arrow function
const App = () => {

  /// Rules of Hooks
  /// 1. Only call hooks at the top level of your function
  /// 2. Only call hooks from the React function components, or from custom hooks
  /// 3. the names of custom hooks must start with "use"
  const [activeTab, setActiveTab] = useState('items');
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart(prevCart => [...prevCart, item]);
  }

  const removeItem = item => {
    let index = cart.findIndex(i => i.id === item.id);
    if(index >= 0){
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }
  };

  return (
    <div className="App">
      {/* <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      /> */}
      <Nav 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          cart={summarizeCart(cart)}
          onRemoveItem={removeItem}
          page={activeTab}
          />
      </main>
      <Footer/>
    </div>
  );
};

const Content = ({tab, onAddToCart, cart, onRemoveItem, page}) => {
  switch (tab) {
    default:
      case 'items':
        return <ItemPage items={items} onAddToCart={onAddToCart} />;
      case 'cart':
        return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem} page={page}/>;
  }
};

export default App;