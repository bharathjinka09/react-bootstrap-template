import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendor/fontawesome-free/css/all.min.css';
import './css/clean-blog.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Sample from './components/Sample';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
    <Router>
   <div className="container"> 
  <Navbar/>
<Header/>
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sample">
            <Sample />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
</Switch>
        <hr />

<Footer/>
</div>
</Router>

 
  );
}

export default App;

