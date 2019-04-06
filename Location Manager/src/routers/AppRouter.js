import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LocationDetail from '../components/LocationDetail';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import AddLocation from '../components/AddLocation';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddLocation} />
        <Route path="/location/:id" component={LocationDetail} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
