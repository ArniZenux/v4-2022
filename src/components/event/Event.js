import React, { useEffect, useState  } from 'react';
import { Link } from "react-router-dom";
import { NotFound } from '../../pages/notfound';
import PropTypes from 'prop-types';

import { Form } from '../../components/form/form';

import s1 from './Event.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

Event.propTypes = {
  id: PropTypes.string.isRequired,
  idUrl: PropTypes.string,
  limit: PropTypes.number,
}

export function Event( { title, id , idUrl, limit = -1} ){
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [dataEvent, setData] = useState(null);

  useEffect(() => {
    async function fetchData(){
      setLoading(true); 
      setError(null); 
      setNotFound(false); 

      let json; 
      //console.log("id: " + id);
      console.log('Title : ' + title); 
            
      const apiUrlId = apiUrl + '/events/';
      
      //console.log(apiUrlId); 
      
      const url = new URL(id, apiUrlId); 
      //console.log(url); 

      try{
        const result = await fetch(url); 
        
        //console.log('Result : ' + result); 

      if(result.status === 404 ){
        setNotFound(true); 
        return;
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
      </div>
   );
  }

  if(loading){
    return (
     <div className="App">
       <h2>Viðburðarlisti</h2>
          <p> sæki gögn .... loading... </p>
     </div>
    );
  } 
 
  if(notFound){
    return (
     <NotFound />
    );
  }

  let items = []; 
  
  if( dataEvent ) {
    items = dataEvent.items; 
    console.log(items);
  } else {
    console.log("tómur");
  }
  console.log("Data utan effect >> "  + dataEvent ); 
  /*
  if( dataEvent.length > 0 ){
    dataEvent.map((item, i) => {
      //console.log(item.namevidburdur); 
    })
    console.log('Nóg af gögn til'); 
  }
  else if(dataEvent.items === null )
  {
    console.log("null null");
  } 
 */
  
  if ( dataEvent && dataEvent.items ) {
    if (limit > 0 ){
      items = dataEvent.items.slice(0, limit)
      console.log("asdf");
    } else {
      items = dataEvent.items;
      console.log("proa");
    }
  }
  
  /*
  { dataEvent.length > 0 && dataEvent.map( (item, i) => {
    return ( <p> { item.namevidburdur } </p>)
    } 
  )}
  */

  return (
    <div className="App">
      <section>
        
        { // dataEvent.length === 0 && ( <p> Engir viðburðir </p> )
        }
        <h4>{ 

          /*dataEvent.length > 0 && dataEvent.map( (item, i) => {
            return ( <a href={item.id} > { item.namevidburdur } </a>)
          })*/
        }</h4>

        { idUrl && <Link to={'/events'+idUrl}> { title } </Link> } 
  
        { !idUrl && ( <Form/> ) } 
        { !idUrl && ( <Link to="/"> Til baka </Link> ) }

      </section>
    </div>
   
   /*<section>
      <p> {data.title }</p> 
      
      {data.length ===0 && ( 
        <p>Engir viðburðir</p>
      )}

      {data.length > 0 && data.map((item,i) => {
        return (
          <li className={s1.Event_layout__li} key={i}>
              <a href={item.slug}> { item.namevidburdur } </a> 
              <p className={s1.Event_layout__p}>{ item.description } </p>
            </li>
        )
      })}
    </section>*/
  );
}
