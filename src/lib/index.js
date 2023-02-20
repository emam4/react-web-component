import Greeting from './components/LeftSideNav';
import reactToWebComponent from "react-to-webcomponent";
import React from 'react';
import ReactDOM from 'react-dom/client';

const reactConponent = reactToWebComponent(Greeting, React, ReactDOM)
customElements.define('test-comp', reactConponent)