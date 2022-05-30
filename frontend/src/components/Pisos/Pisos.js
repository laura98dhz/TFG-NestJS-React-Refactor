import logo from '../../Recursos/img/logo2.png';
import Menu from '../Menu/Menu';
import Piso from '../Piso/Piso'


import { useRef, useState, useEffect } from "react";

function Pisos(props){
   
    const [pisos, setPisos] = useState([]);
    const [cont, setCont] = useState(0);
    const [ubicacion, setUbicacion] = useState();

    const [skip,setSkip] = useState(0);

    const next = useRef(null);
    const previous = useRef(null);

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

        fetch("http://localhost:8080/inmuebles/getAll?limit=5&skip="+skip, { 
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

    useEffect(() => {
        console.log(skip)
        if(skip === 0){
            previous.current.style.display = "none";
            next.current.style.display = "inline";
        }
        if(skip + 5 >= pisos.length){
            previous.current.style.display = "inline";
            next.current.style.display = "none";
        }
        if(skip === 0 && skip + 5 >= pisos.length){
            previous.current.style.display = "none";
            next.current.style.display = "none";
        }

      }, skip);
      
 
    console.log(">>>>>>",pisos.length)

    function previousPage(e){
        e.nativeEvent.preventDefault();

    }

    function nextPage(e){
        e.nativeEvent.preventDefault();
 
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
                <div className=''>
                    <button ref={previous} onClick={(e)=>previousPage(e)}>
                        <i class="fa-solid fa-angle-left"></i>
                    </button>       
                    <button ref={next} onClick={(e)=>nextPage(e)}>
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </section>
        </main>
        </>
    )
}
export default Pisos;