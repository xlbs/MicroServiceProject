import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import history from "./history";
import 'antd/dist/antd.css';
import './statics/css/commcss.css';
import './statics/css/utils.css';
import reducers from './reducers/index';
import App from "./App";

const middleware = [thunk, routerMiddleware(history)];

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(
    <div id='app' className="global">
        <App store={store}/>
    </div>,
    document.getElementById('root')
)