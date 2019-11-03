import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';  //import do component App(no file App)
import 'semantic-ui-css/semantic.min.css';

//O react dom vai renderizar o App no id root do DOM
ReactDOM.render(<App />, document.querySelector('#root') ); 

