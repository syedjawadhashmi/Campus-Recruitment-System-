// import React from 'react';
// import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import { browserHistory } from 'react-router';
// import { Provider } from 'react-redux'

// import { Route, IndexRoute, Router } from 'react-router'
// const rootElement = document.getElementById('root');


//   ReactDOM.render(
//      <App/>,
//     rootElement
//   );

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containners/App/App'
import configureStore from './store/store';
import Root from './config/routes/root';


//const store = configureStore();
//const syncedHistory = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');



  ReactDOM.render(
    <AppContainer>
      <Root/>
    </AppContainer>,
    rootElement
  );


// initAuth(store.dispatch)
//   .then(() => render(Root))
//   .catch(error => console.error(error)); // eslint-disable-line no-console
