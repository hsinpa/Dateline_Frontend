import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";
import Project from "./components/Project/Project";

import './stylesheet/main.scss';


ReactDOM.render(
   
    <div><Project/><Hello compiler="Typescript" framework="React"/></div>, document.getElementById("dateline_app")
)