import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>
      , div);
});
