import * as React from "react";
import * as ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Hello} from "./components/Hello";
import Project from "./components/Project/Project";

import './stylesheet/main.scss';

const store = createStore(() => []);

ReactDOM.render(
    <Provider store={store}>
    <div><Project/><Hello compiler="Typescript" framework="React"/></div>
    </Provider>,
    
    document.getElementById("dateline_app")
)