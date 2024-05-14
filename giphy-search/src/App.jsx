import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState } from 'react';
import {API_KEY} from '../config';
import { useEffect } from 'react';


const trending_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`
const search_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q={query}&limit=3&rating=g`


function App() {
  const [trend, setTrend] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response, error] = await handleFetch(trending_URL);
        if (response) setTrend(response.data);
        console.log(response.data); 
        if (error) setError(error);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  function handleSubmit(e) {
    //do something
  }

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch handleSubmit={handleSubmit}/>
        <br />
        <GifContainer trend ={trend}/>
      </div>
    </div>
  );
}

export default App;