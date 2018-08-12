import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routers from './Route';
ReactDOM.render(<Routers/>, document.getElementById('root'));
registerServiceWorker();
