import React, { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

class Home extends React.Component{
  state = { 
    posts: []
  }

  // https://github.com/vefforritun/vef2-2021-v5-synilausn/blob/main/src/components/news-list/NewsList.jsx

  componentDidMount() {
    axios.get('http://127.0.0.1:8080')
      .then(res => {
        console.log(res.data.message); 
        //const posts = res.data;
        //this.setState({ posts });
      })
      .catch(function (error) {
        console.log(error); 
      })
  }

  render() {
    return (
    <div className="App">
      <h2>Viðburðarlisti</h2>
       <ul>
        {
         this.state.posts
          .map(post => <li> {post.message} </li> 
          )
        }
       </ul>
       <p> Footer Inc </p>
    </div>
    );
  }
}

export default Home; 