import React, { useEffect, useState  } from 'react';
//import { Link } from "react-router-dom";
//import { Event } from '../event/Event';

import s from './Events.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function Home(){
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      let json; 

      //const url = new URL(apiUrl); 

      try{
        const result = await fetch(apiUrl); 

        if(!result.ok){
          throw new Error('Ekki ok');
        }
        json = await result.json();
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        setError('Gat ekki sótt efni');
        return; 
      }
      finally{
        setLoading(false); 
      }

      //console.log('json: >> ', json); 
      setData(json); 
    }

    fetchData(); 
  }, []);

  if (error) {
    return (
      <div className="App">
        <h2>Viðburðarlisti</h2>
          <p> Villa.. {error} </p>
        <p> Footer Inc </p>
      </div>
   );
  }

  if(loading){
    return (
     <div className="App">
       <h2>Viðburðarlisti</h2>
          <p> sæki gögn .... loading... </p>
        <p> Footer Inc </p>
     </div>
    )
  } 

   return (
     <section>
      <h2 className={s.layout} >Viðburðarlisti</h2>
       { data.length === 0 && ( <p> ekki </p>) }
       
       <ul className={s.ul}>
       { data.length > 0 && data.map((item, i) => {
         return (
            <li className={s.li} key={i}>
              <a href={item.slug}> { item.namevidburdur } </a> 
              <p>{ item.description } </p>
            </li>
          )
        })}
        </ul>
      </section>
  );
}
