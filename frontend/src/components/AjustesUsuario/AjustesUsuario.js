import { useEffect, useRef, useState } from "react";
import Piso from "../Piso/Piso";

export default function AjustesUsuario(props){
    const usuario = useRef(null);
    const correo = useRef(null);
    const contraseña = useRef(null);
    
    const [inmuebles, setInmuebles] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [mensajeError, setMensajeError] = useState("");
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

    useEffect(()=>{
        fetch("http://localhost:8080/inmuebles/mostrar/"+ sessionStorage.getItem('usuario')+"?limit=5&skip="+skip, { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        })
        .then(result => {
            return result.json()
        })
        .then( datos => {
            setInmuebles(datos[0])
            botones(datos);
        })
        .catch(err => console.log('Solicitud fallida', err));
    
    },[skip])

    console.log(usuarios)

    function previousPage(e){
        e.nativeEvent.preventDefault();
        setSkip(skip-5);
    }

    function nextPage(e){
        e.nativeEvent.preventDefault();
        setSkip(skip+5); 
    }
    
    function cerrarSesion(e){
        e.nativeEvent.preventDefault();

        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('correo');
        props.cerrarAjustes();
    }

    useEffect(()=>{
        fetch("http://localhost:8080/usuarios/"+ sessionStorage.getItem('usuario'), { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        })
        .then(result => {
            return result.json()
        })
        .then( datos => {
            setUsuarios(datos)
        })
        .catch(err => console.log('Solicitud fallida', err));
    },[])

    function actualizarDatos(e){
        e.nativeEvent.preventDefault();
        
        if(usuario.current.value === ""){
            usuario.current.value = usuarios.nombreUsuario;
        }

        if(correo.current.value === ""){
            correo.current.value = usuarios.correo;
        }

        if(contraseña.current.value === ""){
            console.log("contr", contraseña.current.value)
            contraseña.current.value = usuarios.contraseña;
        }

        fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'nombreUsuario': usuario.current.value,
                'contraseña': contraseña.current.value,
                'correo': correo.current.value
            })
        })
        .then(result => {
            return result.json();
            
        })
        .then((result) => console.log(result))
        .catch((err)=>console.log(err))
        // .then(result => {
        //     sessionStorage.setItem("usuario", result.nombreUsuario);
        //     sessionStorage.setItem("correo", result.correo);
        // });
    }

    function borrar(id){
        fetch("http://localhost:8080/inmuebles/" + id, { 
            'method': 'DELETE',
            'headers': { 'Content-Type': 'application/json' }    
            
        }).then(result => {
            return result.json()
        }).then(datos=>{
            setInmuebles(datos[0])
            botones(datos);
        }).catch(err => console.log('Solicitud fallida', err)); 

    }

    function editar(id){
        props.handleEditar(id);
    }

    console.log(inmuebles[1])
    return(

        <section className="ajustesUsuario--container">
            <div className="ajustesUsuario--usuario">
                <div className="ajustesUsuario--usuario--imagen--container">
                    <i className="fa-solid fa-user"></i>
                </div>
                <form action="#" method="POST" className="ajustesUsuario--usuario--datos--container">
                    <p>Datos</p>
                    <p className="ajustesUsuario--usuario--datos--usuario">Usuario</p>
                    <input ref={usuario} type="text" name="nombreUsuario" placeholder={sessionStorage.getItem('usuario')}></input>
                    <p className="ajustesUsuario--usuario--datos--correo">Correo Electronico</p>
                    <input ref={correo} type="mail" name="nombreMail" placeholder={sessionStorage.getItem('correo')}></input>
                    <p className="ajustesUsuario--usuario--datos--contraseña">Contraseña</p>
                    <input ref={contraseña} type="password" name="nombreContraseña"></input>
                    <p className="ajustesUsuario--usuario--datos--mensaje--error">{ mensajeError }</p>
                    <button onClick={(e)=>actualizarDatos(e)}>Guardar</button>
                </form>
            </div>
            <div className="ajustesUsuario--inmuebles">
                <p>Mis inmuebles</p>
                <div className="ajustesUsuario--inmuebles--container">
                    {
                        inmuebles[1]===0 ? <p>No hay inmuebles</p> : (inmuebles.map(function(piso){
                            return(
                                <div key={piso.id} className="ajustesUsuario--inmuebles--piso--container">
                                    <Piso piso={piso}/>
                                    <div className="ajustesUsuario--inmuebles--piso--botones">
                                        <a className="ajustesUsuario--inmuebles--piso--botones--editar" onClick={()=>editar(piso.id)}><i className="fa-solid fa-square-pen"></i></a>
                                        <a className="ajustesUsuario--inmuebles--piso--botones--borrar" onClick={()=>borrar(piso.id)}><i className="fa-solid fa-square-minus"></i></a>
                                    </div>
                                </div>
                            )
                        }))
                    }
                    <div className='main-pisos-div'></div>
                    <div className='ajustesUsuario--inmuebles-botones'>
                        <button ref={previous} onClick={(e) => previousPage(e)} className='ajustesUsuario--inmuebles-botones--previous'>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button ref={next} onClick={(e) => nextPage(e)} className='ajustesUsuario--inmuebles-botones--next'>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>

                <p className="ajustesUsuario--inmuebles--"></p>
            </div>
            <div className="ajustesUsuario--cerrarSesion">
                <button onClick={(e)=>cerrarSesion(e)}>Cerrar Sesión</button>
            </div>
        </section>
    )
}