import React from 'react';
import { Button } from '../components/button/button';

import L1 from '../components/login/Login.module.scss'


export function Nyskra(){
  return (
    <div className="App">
      <main>
        <h2 className={L1.Login_layout__h2}>Nýskrá</h2>
        <form class="field" method="post" action="/admin/login" autocomplete="off">
           <label  className={L1.Login_layout__label} for="name">Nafn:</label> 
           <input type="text" name="nafn" />
           
           <label  className={L1.Login_layout__label} for="username">Notandi:</label> 
           <input type="text" name="username" />
           
           <label  className={L1.Login_layout__label} for="password">Password:</label>
           <input type="password" id="password" name="password" />
          
          <Button/>
          
          </form>
      </main>
     </div>
   );
}
