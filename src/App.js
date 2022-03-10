import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './utils/CSS/App.css';

import { Layout } from './components/layout/Layout';

import { Index } from './pages/home';
import { Innskra }  from './pages/innskra';
import { NotFound } from './pages/notfound';

export default function App(){
  return (
    <Layout footer="" header="">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/innskra" >
            <Innskra />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Layout> 
  );    
}
