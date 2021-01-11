import './Profile.css';
import React, { Component } from 'react';
import fapp from '../../firebase_auth/base';
import { Link } from 'react-router-dom';

function Profile(){

  return(
    <div>
      profile
      <Link to="/" onClick={() => fapp.auth().signOut()}>
        <button>
          Sign Out
        </button>
      </Link>
    </div>
  )
}

export default Profile;