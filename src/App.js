import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';


// Routes
const Info = lazy(() => import('./info.js'));
const Home = lazy(() => import('./home.js'));


function App() {
  return (
    <Router>
       <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path="/"       render = { props => {return <Home /> }} />
            <Route exact path="/info"   render = { props => {return <Info {...props}/> }} />
          </Switch>
      </Suspense>
    </Router>
    // <div></div>
  );
}

export default App;
