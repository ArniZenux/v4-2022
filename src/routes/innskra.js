import React from 'react';

class Innskra extends React.Component{
  render(){
    return (
      <div className="App">
        <main>
         <h2>Innskrá</h2>

         <form class="field" method="post" action="/admin/login" autocomplete="off">
           <label for="username">Notandi:</label> 
           <input type="text" name="username "/>
           
           <label for="password">Password:</label>
           <input type="password" id="password" name="password" />
          
           <button class="button button--margin">Skrá</button>
        </form>
      </main>
    </div>
  );
 }
}

export default Innskra; 