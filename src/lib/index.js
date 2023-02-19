import Greeting from './components/SpecialButton1';
import reactToWebComponent from "react-to-webcomponent";
import React from 'react';
import ReactDOM from 'react-dom';

const reactConponent = reactToWebComponent(Greeting, React, ReactDOM)
customElements.define('test-comp', reactConponent)