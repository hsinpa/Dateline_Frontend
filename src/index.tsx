import * as React from "react";
import * as ReactDOM from "react-dom";
import thunkMiddleware from 'redux-thunk'

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Hello} from "./components/Hello";
import Project from "./components/Project/Project";

import {Reducer} from "./Reducer/ReducerContainer";

import './stylesheet/main.scss';

const store = createStore(Reducer, {}, applyMiddleware(thunkMiddleware));

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
    <div><Project/><Hello compiler="Typescript" framework="React"/></div>
    </Provider>,

    document.getElementById("dateline_app")
)