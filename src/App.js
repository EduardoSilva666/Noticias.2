import Noticias from './componentes/Noticias';
import Header from './componentes/Header';
import Categorias from './componentes/Categorias';
import './App.css';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';

const App = () =>{

  const [noticias, setNoticias] = useState([]);

  const [categoria, setCategoria] = useState("general");

  useEffect(()=>{
    consultarNoticias();
  }, [categoria]);

  const consultarNoticias = () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=831b9af8a2ec4f71856e70d01c94c275` ;
    fetch(url).then(res => {
      return res.json();
    }).then(noticias => {
      setNoticias(noticias.articles);
    })
  }

  return (
    <div>
        <Header />
        <div className="container">
          <Categorias setCategoria={setCategoria} />
          <Noticias noticias={noticias} />
          {console.log(categoria)}
        </div>
    </div>
  )


}
export default App;

