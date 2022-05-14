import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import {useState, useEffect} from 'react'
import Gif from './components/Gif';

function App() {
const url = `https://api.giphy.com/v1/gifs/random?api_key=UskIgPbdkdu7DyfCUzaeyOHtQNO3D6Ef&tag=&rating=g`
const [gif, setGif] = useState(null)

const getGif = async () => {
  const data = await fetch(url).then(res => res.json())
  setGif(data)
  console.log(gif)
}

  return (
    <div className="App">
      <Header />
      <Button getGif={getGif}/>
      <Gif gif={gif} />
    </div>
  );
}

export default App;
