import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Router>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" exact component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;