import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import {store} from './App/store/store'
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals'; --rappport de perf fournit par html
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /**React.StrictMode -> permet de mettre mute sur les erreur explicite */
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
