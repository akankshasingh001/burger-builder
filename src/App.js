import React, { Component, Fragment } from 'react';
import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </Fragment>
    );
  }
}

export default App;
