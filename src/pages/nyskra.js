import React from 'react';

export function Nyskra(){
  return (
    <div className="App">
      <main>
        <h2>Nýskrá</h2>
        <form class="field" method="post" action="/admin/login" autocomplete="off">
           <label for="name">Nafn:</label> 
           <input type="text" name="nafn" />
           
           <label for="username">Notandi:</label> 
           <input type="text" name="username" />
           
           <label for="password">Password:</label>
           <input type="password" id="password" name="password" />
          
           <button class="button button--margin">Skrá</button>
          
          </form>
      </main>
     </div>
   );
}
