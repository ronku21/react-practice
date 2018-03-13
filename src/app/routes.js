import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import {
	RegisterContainer,
	LoginContainer
} from './containers';


export default () => {
 return (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={RegisterContainer} />
			<Route exact path='/sign-up' component={RegisterContainer} />
			<Route exact path='/sign-in' component={LoginContainer} />
		</Switch>
	</BrowserRouter>
 )
}
