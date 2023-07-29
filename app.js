import React from 'react';
import { createRoot } from 'react-dom/client';

import MyComponent from "./page";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);

