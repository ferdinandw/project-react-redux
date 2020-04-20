import React from 'react';
import {createStore} from 'redux';
import {Provider } from 'react-redux';
import reducer from './components/store';
import Page from './components/pages'
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  );
}

export default App;
