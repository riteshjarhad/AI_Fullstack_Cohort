import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {App2,name} from "./App";

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>

    {/* component calling */}
    <App/>

    {/* function calling */}
    {/* <App2/>*/}

    <h1>{App2()}</h1>
    <h1>Your name is{name}</h1>
    
  </React.StrictMode>
)


