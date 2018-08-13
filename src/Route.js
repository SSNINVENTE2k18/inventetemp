import React from 'react';
import PaperPresentation from './components/PaperPresentation';
import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
export default ()=>(
    <BrowserRouter>
  <Switch>
        <Route exact path='/' component={App} />
        <Route path='/events' component={PaperPresentation} />
      </Switch>
</BrowserRouter>
);