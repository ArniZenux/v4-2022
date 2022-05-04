import React, { useDebugValue } from 'react';
import { useState } from 'react';
import { Button } from '../button/button';

import L1 from './Login.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function Login(){
  const [error, setError] = useState(null); 
  const [redirect, setRedicect] = useState(null); 

  if(error){
    return <p> vandamal kom upp </p>;
  }
  /*
  const state = {
   username: '',
   password: ''
  }
  
  handleInputChange = (e) => {
   const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = (loginUser) => async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    loginUser(username, password);
  }

  const { username, password } = this.state; 
  */
 
  return (
    <div className="App">
      <main>
        <h2 className={L1.Login_layout__h2}>Innskrá</h2>

        <form class="field" method="post" action="/admin/login" autocomplete="off">
          <label className={L1.Login_layout__label} for="username">Notandi:</label> 
          <input type="text" name="username "/>
           
          <label className={L1.Login_layout__label} for="password">Password:</label>
          <input type="password" id="password" name="password" />
           
          <Button />

        </form>
      </main>
    </div>
  );
 }
