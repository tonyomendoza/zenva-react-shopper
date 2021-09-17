import React, { useState } from 'react';

import Nav from './components/Nav';
import ItemPage from './components/pages/ItemPage';
import {items} from './js/static-data'

import './App.css';
import CartPage from './components/pages/CartPage';

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
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          cart={summarizeCart(cart)}
          onRemoveItem={removeItem}/>
      </main>
    </div>
  );
};

const Content = ({tab, onAddToCart, cart, onRemoveItem}) => {
  switch (tab) {
    default:
      case 'items':
        return <ItemPage items={items} onAddToCart={onAddToCart} />;
      case 'cart':
        return <CartPage items={cart} onAddOne={onAddToCart} onRemoveOne={onRemoveItem}/>;
  }
};

export default App;