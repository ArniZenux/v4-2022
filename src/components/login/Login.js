import React from 'react';
import { Button } from '../button/button';

import L1 from './Login.module.scss';

export function Login(){
  /*
   state = {
    username: '',
    password: ''
   }
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
