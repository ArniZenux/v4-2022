import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Home from './routes/home';
import Innskra from './routes/innskra';
import Nyskra from './routes/nyskra';
import NotFound from './routes/notfound';

class App extends React.Component{ 
  render() {
    return (
     <main> 
      <nav>
        <ul>
          <li><NavLink to="/">Viðburðalisti</NavLink></li>
          <li><NavLink to="/innskra">Innskrá</NavLink></li>
          <li><NavLink to="/nyskra">Nýskrá</NavLink></li>
        </ul>
      </nav>

      <section>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/innskra" component={Innskra}/>
          <Route exact path="/nyskra" component={Nyskra}/>
          <Route component={NotFound} />
        </Switch>
      </section>
    </main>
  );
 }
}

export default App;