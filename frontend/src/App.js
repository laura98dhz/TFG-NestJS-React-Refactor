import img2 from './components/Slider/img/hipoteca.jpg';
import img3 from './components/Slider/img/hipoteca2.jpg';
import img1 from './components/Slider/img/fondoPaginaPrincipal.jpg';

import { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pisos from './components/Pisos/Pisos';
import MainPrincipal from './components/Main/MainPrincipal'
import Acceder from './components/Acceder/Acceder';
import AjustesUsuario from './components/AjustesUsuario/AjustesUsuario';
import Registro from './components/Registro/Registro';
import CrearInmueble from './components/CrearInmueble/CrearInmueble';
import EditarInmueble from './components/EditarInmueble/EditarInmueble';

function App() {

  const [cargarPisos, setCargarPisos] = useState(false);
  const [cargarHeader, setCargarHeader] = useState(true);
  const [cargarFooter, setCargarFooter] = useState(true);
  const [cargarAcceder, setCargarAcceder] = useState(false);
  const [cargarMain, setCargarMain] = useState(true);
  const [cargarAjustesUsuario, setCargarAjustesUsuario] = useState(false);
  const [cargarRegistro, setCargarRegistro] = useState(false);
  const [cargarCrearInmueble, setCargarCrearInmueble] = useState(false);
  const [cargarEditarInmueble, setCargarEditarInmueble] = useState(false)

  const [opcionElegida, setOpcionElegida] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [id, setId] = useState("");
  
  //Ocultar y mostrar

  function mostrarInmuebles(){
    setCargarPisos(true);
    setCargarMain(false);
    setCargarHeader(true);
    setCargarFooter(true);
  }

  function mostrarMain(){
    setCargarMain(true);
    setCargarPisos(false);
    setCargarAcceder(false);
    setCargarAjustesUsuario(false);
    setCargarRegistro(false);
    setCargarHeader(true);
    setCargarFooter(true);
  }

  function mostrarAcceder(){
    setCargarAcceder(true);
    setCargarMain(false);
    setCargarPisos(false);
    setCargarHeader(false);
    setCargarFooter(false);
  }

  function cerrarAcceder(){
    setCargarAcceder(false);
    setCargarHeader(true);
    setCargarMain(true);
    setCargarFooter(true);
    setCargarCrearInmueble(false);
  }
  
  function cerrarEditarInmueble(){
    setCargarEditarInmueble(false);
    setCargarHeader(true);
    setCargarAjustesUsuario(true);
    setCargarFooter(true);
  }

  function ajustesUsuario(){
    setCargarAjustesUsuario(true);
    setCargarMain(false);
    setCargarPisos(false);
  }

  function cerrarAjustesUsuario(){
    setCargarAjustesUsuario(false);
    setCargarMain(true);
  }

  function cargarRegistroUsuario(){
    setCargarRegistro(true);
    setCargarAcceder(false);
    setCargarHeader(false);
    setCargarMain(false);
    setCargarPisos(false);
    setCargarFooter(false);
  }

  function cargarPonerAnuncio(){

    setCargarHeader(false);
    setCargarMain(false);
    setCargarPisos(false);
    setCargarFooter(false);
    setCargarEditarInmueble(false);
    setCargarAjustesUsuario(false);
    
    if(sessionStorage.getItem('usuario') !== null){
      setCargarCrearInmueble(true);
    }else{
      setCargarAcceder(true);
    }
  }
  
  //Guardar datos

  function selectOpcionTransaccion(opcion){
    setOpcionElegida(opcion);
  }

  function ubicacionElegida(ubicacion){
    setUbicacion(ubicacion);
  }

  function usuarioCorrecto(){
    setCargarAcceder(false);
    setCargarHeader(true);
    setCargarMain(true);
    setCargarFooter(true);
  }

  function editarInmueble(id){
    setCargarEditarInmueble(true);
    setCargarHeader(false);
    setCargarAjustesUsuario(false);
    setCargarFooter(false);
    setId(id);
  }

  console.log("app>>>",sessionStorage.getItem('usuario'))
  return (
    <>
      { cargarHeader ? <Header handleOnClick={mostrarMain} accederOnClick={mostrarAcceder} ajustesOnClick={ajustesUsuario} handleCargarAnuncio={cargarPonerAnuncio}/> : "" }
      { cargarAcceder ? <Acceder cerrarOnCLick={cerrarAcceder} usuarioOnClick={usuarioCorrecto} crearUsuarioOnClick={cargarRegistroUsuario}/> : "" }
      { cargarMain ? <MainPrincipal handleOnClick={mostrarInmuebles} opcionOnClick={selectOpcionTransaccion} ubicacionOnClick={ubicacionElegida}/> : "" } 
      { cargarPisos ? <Pisos ubicacion={ubicacion} opcion={opcionElegida}/> : "" }
      { cargarAjustesUsuario ? <AjustesUsuario cerrarAjustes={cerrarAjustesUsuario} handleEditar={editarInmueble}/> : "" }
      { cargarFooter ? <Footer/> : "" }
      { cargarRegistro ? <Registro cargarRegistro={cargarRegistroUsuario} cerrarRegistro={mostrarMain}/> : "" }
      { sessionStorage.getItem('usuario') && cargarCrearInmueble ? <CrearInmueble cerrarOnCLick={cerrarAcceder}/> : "" } 
      { cargarEditarInmueble ? <EditarInmueble id={id} cerrarOnCLick={cerrarEditarInmueble}/> : "" } 
    </>
  )
}

export default App;