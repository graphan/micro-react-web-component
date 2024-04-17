import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class SAMElement extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.appendChild(mountPoint);
    ReactDOM.render(<App />, mountPoint);
  }
  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.firstChild);
  }
}

// Register the custom element
window.customElements.define('sam-element', SAMElement);