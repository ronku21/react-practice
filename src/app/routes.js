import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import {
	RegisterContainer,
	LoginContainer,
	ProfileContainer,
	ChangePasswordContainer
} from './containers';
import {Home} from './components';

export default () => {
 return (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={RegisterContainer} />
			<Route exact path='/sign-up' component={RegisterContainer} />
			<Route exact path='/sign-in' component={LoginContainer} />
			<Route exact path='/home' component={Home}/>
			<Route exact path='/profile' component={ProfileContainer}/>
			<Route exact path='/changePassword' component={ChangePasswordContainer}/>
		</Switch>
	</BrowserRouter>
 )
}
