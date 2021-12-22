import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from 'remoteHeader/Header';

const App = () => <div><Header>我是header2</Header> I'm Header Consumer.</div>;

ReactDOM.render(<App />, document.getElementById("app"));
