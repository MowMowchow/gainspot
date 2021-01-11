import './SignUp.css';
import React, { useCallback } from 'react';
import {withRouter} from 'react-router';
import fapp from '../../firebase_auth/base';

const SignUp = ({history}) =>{
  const handleSignUp = useCallback( async (event) => {
    event.preventDefault();
    const {username, email, password} = event.target.elements;

    try{
      await fapp.auth().createUserWithEmailAndPassword(email.value, password.value); // actual firebase auth action
      let data = {
        username: username.value,
        email: email.value,
      };
      // send user data to mongo
      history.push('/profile');

    } catch(error){alert(error);}
  }, [history]);


  return(
    <div>
      SignUp
      <form onSubmit={handleSignUp}>
        <input
          name="username"
          className=""
          type="text"
          placeholder="Username"
        />

        <input 
          name="email" 
          className="signup-email" 
          type="email" 
          placeholder="Email" 
        />

        <input
					name="password"
          className="signup-password"
          type="password"
          placeholder="Password"
        />

        <button 
          type="submit" 
          className="signup-btn">
					Sign Up
        </button>
      </form>
    </div>
  )
}

export default withRouter(SignUp);
