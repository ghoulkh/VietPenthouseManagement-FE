// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux'
import rootReducer from './ActionService'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Provider store={store}><App /></Provider>);

reportWebVitals();
