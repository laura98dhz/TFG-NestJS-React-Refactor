import logo from '../../Recursos/img/logo2.png';
import Menu from '../Menu/Menu';
import Piso from '../Piso/Piso'


import { useState } from "react";

function Pisos(props){
   
    const [pisos, setPisos] = useState([]);
    const [cont, setCont] = useState(0);
    const [ubicacion, setUbicacion] = useState();

    if(props.ubicacion !== "" && cont=== 0){

        fetch("http://localhost:8080/inmuebles"+'/'+ props.ubicacion, { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        }).then(result => {
            return result.json();
        }).then( datos => {
            setPisos(datos);
            setCont(1);
            setUbicacion(true);
        })
        .catch(err => console.log('Solicitud fallida', err)); 
         

    }else if(props.ubicacion === "" && cont=== 0){

        fetch("http://localhost:8080/inmuebles", { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        }).then(result => {
            return result.json();
        }).then( datos => {
            setPisos(datos);
            setCont(1)
            setUbicacion(false);
        })
        .catch(err => console.log('Solicitud fallida', err)); 

    }
 
    return(
        <>
        <main className='main'>
            <Menu/>
            <section className='main-pisos'>
                   {
                       ubicacion ? (
                            pisos.map(function(piso){
                                
                                if(props.tipoOperacion !== ""  && piso.tipoOperacion === props.opcion){
                                    return(
                                        <Piso piso={piso}/>                                                         
                                    )
                                }else if(props.opcion === "" ){
                                    return(
                                        <Piso piso={piso}/>                                                         
                                    )
                                }
                            })
                       ) : (
                            pisos.map(function(piso){
                                if(props.tipoOperacion !== ""  && piso.tipoOperacion === props.opcion){
                                    return(
                                        <Piso piso={piso}/>                                                         
                                    )
                                }else if(props.opcion === "" ){
                                    return(
                                        <Piso piso={piso}/>                                                         
                                    )
                                }
                            })
                       )
                   }
            </section>
        </main>
        </>
    )
}
export default Pisos;