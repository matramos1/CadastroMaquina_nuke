import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import Counter from './componentes/counter'

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();



