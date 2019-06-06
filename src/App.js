import React, { Component } from 'react';

import FeatureProvider from './components/atoms/FeatureProvider';
import Main from './components/atoms/Main';

class App extends Component {

  render() {
    
    const dataFromExternalService = {
      foo: true,
      bar: false,
      baz: 'green',
      free: true,
    }

    return (
      <div className="App">
        <FeatureProvider data={dataFromExternalService}>
          <Main />
        </FeatureProvider>
      </div>
    );
  }
}

export default App;
