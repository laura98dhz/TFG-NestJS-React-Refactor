import logo from '../../Recursos/img/logo2.png';
import Menu from '../Menu/Menu';
import Piso from '../Piso/Piso'


import { useRef, useState, useEffect } from "react";

function Pisos(props){
   
    const [pisos, setPisos] = useState([]);
    const [ubicacion, setUbicacion] = useState();

    const [skip,setSkip] = useState(0);

    const next = useRef(null);
    const previous = useRef(null);

    function botones(datos){
        console.log(datos[1])
        if(datos[1]>=5){
            next.current.style.display = "inline";
        }else if(datos[1]<=5){
            next.current.style.display = "none";
        }
        if(skip+5>=datos[1]){
            next.current.style.display = "none";
        }
        if(skip === 0){
            previous.current.style.display = "none";
        }else{
            previous.current.style.display = "inline";
        }
    }
console.log(pisos)
    useEffect(()=>{
        if(props.ubicacion !== "" ){
    
            fetch("http://localhost:8080/inmuebles/"+props.ubicacion+"?limit=5&skip="+skip+"&operacion="+props.opcion, { 
                'method': 'GET',
                'headers': { 'Content-Type': 'application/json' },    
            }).then(result => {
                return result.json();
            }).then( datos => {
                setPisos(datos);
                setUbicacion(true);
                botones(datos);
            })
            .catch(err => console.log('Solicitud fallida', err)); 
             
    
        }else if(props.ubicacion === "" ){
    
            fetch("http://localhost:8080/inmuebles/getAll?limit=5&skip="+skip+"&operacion="+props.opcion, { 
                'method': 'GET',
                'headers': { 'Content-Type': 'application/json' },    
            }).then(result => {
                return result.json();
            }).then( datos => {
                setPisos(datos);
                setUbicacion(false);
                botones(datos);
            })
            .catch(err => console.log('Solicitud fallida', err)); 
    
        }
    },[skip])     



    function previousPage(e){
        e.nativeEvent.preventDefault();
        setSkip(skip-5);
    }

    function nextPage(e){
        e.nativeEvent.preventDefault();
        setSkip(skip+5); 
    }
    console.log(props.opcion)

    return(
        <>
        <main className='main'>
            <Menu/>
            <section className='main-pisos'>
                {
                    pisos[1]===0 ? <p>No hay inmuebles</p> : (
                        pisos[0]?.map(function(piso){
                        return(
                            <Piso piso={piso}/>                              
                        )
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