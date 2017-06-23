import React from 'react';
import { render } from 'react-dom';
import Main from './main';

render(
  React.createElement(Main),
  global.document.querySelector('[data-js="react-hook"]'),
);
