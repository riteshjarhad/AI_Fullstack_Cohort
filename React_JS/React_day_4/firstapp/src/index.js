import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  // Fragments -
  // Its a wrapper used to grouping the JSX elements
  // Modern JS

  // Empty wrapper -
  // <> </> or <React.Fragment> </React.Fragments> or <div></div>
  // OR

  // strictMode -
  // it shows and highlights the potential issues and warnings in our application 
  //
</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
