import './App.css';
import React, {useState} from 'react';
import FindExercise from './components/FindExercise/FindExercise';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Profile from './components/Profile/Profile';
import fapp from './firebase_auth/base';
import {AuthProvider} from './firebase_auth/auth';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './firebase_auth/PrivateRoute';


function App() {
	var [loggedIn, setloggedIn] = useState(null);
	var [loggedOut, setloggedOut] = useState(null);

	fapp.auth().onAuthStateChanged(user => {
		if (user){
			setloggedIn(loggedIn = true);
			setloggedOut(loggedOut = false);
		} else {
			setloggedIn(loggedIn = false);
			setloggedOut(loggedOut = true);
		}
	})
	
	return (
		<AuthProvider>
			<Router>
				<div>
          <Nav loggedin = {loggedIn} loggedout = {loggedOut} />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/explore" exact component={FindExercise}/>
            <PrivateRoute path="/profile" exact component={Profile}/>
					</Switch>
				</div>
			</Router>
		</AuthProvider>
	);
}
export default App;
