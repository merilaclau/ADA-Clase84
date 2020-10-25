import React, { useState, useEffect } from 'react';
import './App.scss';
import Button from './components/Button/Button';
import ImgContainer from './components/ImgContainer/ImgContainer';
import axios from 'axios';

const App = () => {
  const [image, setImage] = useState(null);

  /*const getImage = async () => {
    try {
      
    }
    catch (err) {
      alert('Error getting image ${err}');
    }
  }*/

  const getImages = async () => {
    try {
      const res = await axios.get("https://api.thecatapi.com/v1/images/search");
      setImage(res.data[0].url);
    }
    catch (err) {
      alert('Error getting image ${err}');
    }
  }
  
  useEffect(() => {
      getImages();
  }, []);



  return (
    <div className="content-wrapper">
      <h1>¿Qué gatite sos hoy?</h1>
      <ImgContainer
        src={image}
      />
      <Button
        onClick={getImages}
      />
    </div>
    
  );
}

export default App;
