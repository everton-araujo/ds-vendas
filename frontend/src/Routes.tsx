import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Dashboard from "pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
