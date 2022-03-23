import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './utils/CSS/App.css';

import { Layout } from './components/layout/Layout';

import { Index } from './pages/home';
import { Innskra }  from './pages/innskra';
import { Nyskra }  from './pages/nyskra';
import { NotFound } from './pages/notfound';
import { NewEvent } from './pages/event';

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
          <Route exact path="/nyskra" >
            <Nyskra />
          </Route>
          <Route exact path="/events/:id" children={<NewEvent />} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Layout> 
  );    
}
