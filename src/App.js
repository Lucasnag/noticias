import React, {Fragment, useEffect, useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import ListadoNoticias from './Components/ListadoNoticias';

function App() {
  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=b1be256c2b5f4cec9d7bbb785b00b559`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      console.log(noticias)
      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria]  )
  
  
  return (
    
<Fragment>
  <Header titulo="Buscador de Noticias"/>

    <div className="container white">
      
    </div>
      <Formulario
      guardarCategoria={guardarCategoria}
      />
      <ListadoNoticias
      noticias={noticias}
      />
</Fragment>    
);
}

export default App;