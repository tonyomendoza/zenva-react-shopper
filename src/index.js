import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// import './index.css';

// pages
import App from './App';
// import Index from "views/Index.js";
// import NucleoIcons from "views/NucleoIcons.js";
// import LandingPage from "views/examples/LandingPage.js";
// import ProfilePage from "views/examples/ProfilePage.js";
// import RegisterPage from "views/examples/RegisterPage.js";

import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
<BrowserRouter>
<Switch>
<Route path="/index" render={(props) => <App {...props} />} />
  {/*
  <Route
    path="/nucleo-icons"
    render={(props) => <NucleoIcons {...props} />}
  /> <Route path="/index" render={(props) => <Index {...props} />} />
  <Route
    path="/nucleo-icons"
    render={(props) => <NucleoIcons {...props} />}
  />
   <Route
    path="/landing-page"
    render={(props) => <LandingPage {...props} />}
  />
  <Route
    path="/profile-page"
    render={(props) => <ProfilePage {...props} />}
  />
  <Route
    path="/register-page"
    render={(props) => <RegisterPage {...props} />}
  /> */}
  {/* <Redirect to="/index" /> */}
  <Redirect to="/index" />
</Switch>
</BrowserRouter>,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
