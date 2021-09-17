import React, { useState } from 'react';

import Nav from './components/Nav';

import './App.css'

// arrow function
const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  /// Rules of Hooks
  /// 1. Only call hooks at the top level of your function
  /// 2. Only call hooks from the React function components, or from custom hooks
  /// 3. the names of custom hooks must start with "use"

  return (
    <div className="App">
      <Nav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="App-content">
        <Content tab={activeTab} />
      </main>
    </div>
  );
};

const Content = ({tab}) => {
  switch (tab) {
    default:
      case 'items':
        return <span>the items</span>;
      case 'cart':
        return <span>the cart</span>;
  }
};

export default App;