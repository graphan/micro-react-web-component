import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { defineCustomElement } from '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

class MyCustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

defineCustomElement(MyCustomElement, 'my-custom-element');