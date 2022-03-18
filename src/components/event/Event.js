import React, { useEffect, useState  } from 'react';
import { NotFound } from '../../pages/notfound';

const apiUrl = process.env.REACT_APP_API_URL;

export function Event( { id, onDelete, EventUrl, limit = -1 } ){
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 
      setNotFound(false); 

      let json; 

      const url = new URL(id, apiUrl); 
      //console.log(url); 

      try{
        const result = await fetch(url); 

      if(result.status === 404 ){
        setNotFound(true); 
      }

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

      console.log('json: >> ', json); 
      setData(json); 
    }

    fetchData(); 
  }, [id]);

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
    );
  } 
 
  if(notFound){
    return (
     <NotFound />
    );
  }

  let items = []; 
  
  console.log("Data "  + data); 

  if ( data && data.items ) {
    if (limit > 0 ){
      items = data.items.slice(0, limit)
    } else {
      items = data.items;
    }
  }

  console.log(items); 

  return (
    <section>
      <p> {items.title }</p> 
      {items.length === 0 && (<p> Engin viðburðir </p> )}
      {items.length > 0 && items.map((item,i) => {
        return (
          <p>{ item.title } </p>
        )
      })}
    </section>
  );
}
