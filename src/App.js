import React from 'react';
import Dashboard from './Dashborad'
import Payment from './Payment'
import { CourseHome } from './CourseHome';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login'
export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/course/:id">
            <CourseHome/>
          </Route>
          <Route path="/payment/:id">
            <Payment />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


