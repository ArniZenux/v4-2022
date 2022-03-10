import React, { useEffect, useState  } from 'react';
const apiUrl = process.env.REACT_APP_API_URL;

export function Home(){
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData(){
      let json; 

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

      console.log('json: >> ', json); 
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
    <div className="App">
      <h2>Viðburðarlisti</h2>
       <ul>
          <li>
              id={data.id}
          </li>
       </ul>
    </div>
   );
}
