import React from 'react';

//const apiUrl = process.env.REACT_APP_API_URL;

class Home extends React.Component{

  // https://github.com/vefforritun/vef2-2021-v5-synilausn/blob/main/src/components/news-list/NewsList.jsx

  render() {
    return (
    <div className="App">
      <h2>Viðburðarlisti</h2>
       <ul>
        <li>Partý</li>
        <li>Hátið</li>
       </ul>
       <p> Footer Inc </p>
    </div>
    );
  }
}

export default Home; 
