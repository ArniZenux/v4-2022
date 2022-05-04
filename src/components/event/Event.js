import React, { useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import { NotFound } from '../../pages/notfound';
import PropTypes from 'prop-types';

import { Form } from '../../components/form/form';

import se from './Event.module.scss';

const apiUrl = process.env.REACT_APP_API_URL;

Event.propTypes = {
  id: PropTypes.string.isRequired,
  idUrl: PropTypes.string,
  limit: PropTypes.number,
}

export function Event( { title, id , idUrl} ){
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
      const apiUrlId = apiUrl + '/events/';
      const url = new URL(id, apiUrlId); 
      console.log(url); 

      try{
        const result = await fetch(url); 
        
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
      
      setData(json);
      console.log(json);
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
 
  let itemss = []; 
  let notendur = [];

  if( dataEvent && dataEvent.items){
      itemss = dataEvent.items;
      notendur = dataEvent.notendur;
  }
  
  if( itemss.length === 0 ) {
    return (  
      <div className='App'>
        <section> 
          <p> Engir viðburðir</p> 
        </section>
      </div>
    )
  }
         
  return (
    <div className="App">
      <section>

        { idUrl && <Link to={'/events'+idUrl}> { title } </Link> } 

        { !idUrl && ( itemss && itemss.length > 0 && itemss.map((item,i ) => {
          return (  
                <ul className={se.layout__ul}> 
                  <li className={se.layout__li}>  { item.namevidburdur } </li>
                  <li className={se.layout__li2}> { item.description }</li>
                </ul>
                )
             })
         ) }
        { !idUrl && ( <hr className={se.layout__hr}/> ) }
        { !idUrl && ( notendur && notendur.length > 0 && notendur.map((item,i ) => {
          return (  
                <ul className={se.layout__ul}> 
                  <li className={se.layout__li}> { item.nameskra } </li>
                  <li className={se.layout__li2}> { item.comment }</li>
                </ul>
                )
             })
         ) }

        { !idUrl && ( <Form/> ) } 
        { !idUrl && ( <Link to="/"> Til baka </Link> ) }

      </section>
    </div>
  );
}
