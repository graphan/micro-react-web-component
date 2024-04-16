import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComponent from './MyComponent';
import { defineCustomElement } from '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

class MyCustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<MyComponent />, this);
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }
}

defineCustomElement(MyCustomElement, 'my-custom-element');