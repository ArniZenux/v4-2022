import React, { useEffect, useState  } from 'react';
import { Event } from '../event/Event';

//import { Link } from "react-router-dom";

import s1 from './Events.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

export function Home(){
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 

      let json; 

      try{
        const result = await fetch(apiUrl + '/events'); 

        if(!result.ok){
          throw new Error('Ekki ok');
        }
        json = await result.json();
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        setError('Gat ekki sótt efni í vefþjónustu - Bilað í þjónustuna.');
        return; 
      }
      finally{
        setLoading(false); 
      }

      setData(json); 
    }

    fetchData(); 
  }, []);

  if (error) {
    return (
      <div className="App">
        <h2>Viðburðarlisti</h2>
          <p> Villa: {error} </p>
      </div>
   );
  }

  if(loading){
    return (
     <div className="App">
       <h2>Viðburðarlisti</h2>
          <p> sæki gögn .... loading... </p>
     </div>
    )
  } 
 
  console.log('Events: Data ' + data); 
 
  /*
  return (
   <section className={s1.Event_layout__header}>
    <h2 className={s1.Event_layout__h2} >Viðburðarlisti</h2>
     { data.length === 0 && ( <p className={s1.Event_layout__h2}> Engir viðburðir </p>) }
     
     <ul className={s1.Event_layout__ul}>
     { data.length > 0 && data.map( (item, i) => {
         return (
          <li key={i} className={s1.Event_layout__li}>
            <a href={ item.id } > { item.namevidburdur } </a>
            <Link to="/adf" >  { item.namevidburdur } </Link>  
          </li>
        )
      })
     }
    </ul>
  </section>
  );
  */
  return (
    <section className={s1.Event_layout__header}>
      <h2 className={s1.Event_layout__h2} >Viðburðarlisti</h2>
       { data.length === 0 && ( <p className={s1.Event_layout__h2}> Engir viðburðir </p>) }
       
       { data.map( (item, i) => {
           return (
            <div key={i} className={s1.Event_layout____item}>
              <Event 
                title={item.namevidburdur} 
                id={item.id} 
                idUrl={`/${item.id}`}
                limit={3}
              />
            </div>
          )
        })
       }
    </section>
  );
}
