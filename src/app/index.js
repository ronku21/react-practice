import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import { Provider } from 'react-redux';
import './init.js';
import store from './store';
import AppRoutes from './routes';

ReactDOM.render(
	<Provider store={store}>
    	<AppRoutes/>
  	</Provider>,
	document.getElementById('app')
);
