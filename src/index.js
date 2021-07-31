import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

const store = createStore(
    appReducers, 
    window.__REDUX_DEVTOOLS__EXTENSION && window.__REDUX_DEVTOOLS__EXTENSION(),
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider> , 
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




