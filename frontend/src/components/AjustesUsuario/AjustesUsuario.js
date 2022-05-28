import { useEffect, useRef, useState } from "react";
import Piso from "../Piso/Piso";

export default function AjustesUsuario(props){
    const usuario = useRef(null);
    const correo = useRef(null);
    const contraseña = useRef(null);
    
    const [inmuebles, setInmuebles] = useState([]);
    const [borrado, setBorrado] = useState(false);
    const [mensajeError, setMensajeError] = useState("");
    console.log(mensajeError)
    useEffect(()=>{
        fetch("http://localhost:8080/inmuebles/mostrar/"+ sessionStorage.getItem('usuario'), { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        })
        .then(result => {
            return result.json()
        })
        .then( datos => {
            setInmuebles(datos)
        })
        .catch(err => console.log('Solicitud fallida', err));
    
    },[borrado])

    function cerrarSesion(e){
        e.nativeEvent.preventDefault();

        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('correo');
        props.cerrarAjustes();
    }

    function actualizarDatos(e){
        e.nativeEvent.preventDefault();
        
        if(usuario.current.value && contraseña.current.value && correo.current.value){
           
            fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'nombreUsuario': usuario.current.value,
                'contraseña': contraseña.current.value,
                'correo': correo.current.value
            })
            })
            .then(() => {
                setMensajeError("")
            })
            .catch(setMensajeError("Ese usuario ya existe"));
        }

        if(usuario.current.value && contraseña.current.value ){
            fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
                'method': 'PUT',
                'headers': { 'Content-Type': 'application/json' },    
                'body': JSON.stringify({
                    'nombreUsuario': usuario.current.value,
                    'contraseña': contraseña.current.value
                })
                })
                .then(() => {
                    setMensajeError("")
                })
                .catch(setMensajeError("Ese usuario ya existe"));
            }
        if(usuario.current.value && correo.current.value){
           
            fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'nombreUsuario': usuario.current.value,
                'correo': correo.current.value
            })
            })
            .then(() => {
                setMensajeError("")
            })
            .catch(setMensajeError("Ese usuario ya existe"));
        }

        if(contraseña.current.value && correo.current.value){
           
            fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'contraseña': contraseña.current.value,
                'correo': correo.current.value
            })
            })
            .then(() => {
                setMensajeError("")
            })
            .catch(err => console.log('Solicitud fallida', err));
        }

        if(usuario.current.value){
           
            fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'nombreUsuario': usuario.current.value,
            })
            })
            .then(() => {
                setMensajeError("")
            })
            .catch(setMensajeError("Ese usuario ya existe"));
        }

        if(contraseña.current.value){
           
            fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'contraseña': contraseña.current.value,
            })
            })
            .then(() =>{ 
                setMensajeError("")
            })
            .catch(err => console.log('Solicitud fallida', err));
        }

        if(correo.current.value){
           
            fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'correo': correo.current.value
            })
            })
            .then(() => {
                setMensajeError("")
            })
            .catch(err => console.log('Solicitud fallida', err));
        }
    }

    function borrar(id){
        fetch("http://localhost:8080/inmuebles/" + id, { 
            'method': 'DELETE',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'id': id
            })
        })
        .catch(err => console.log('Solicitud fallida', err)); 

        borrado ? setBorrado(false) : setBorrado(true);
    }

    function editar(id){
        props.handleEditar(id);
    }

    return(

        <section className="ajustesUsuario--container">
            <div className="ajustesUsuario--usuario">
                <div className="ajustesUsuario--usuario--imagen--container">
                    <i class="fa-solid fa-user"></i>
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
                        inmuebles.map(function(piso){
                            return(
                                <div key={piso.id} className="ajustesUsuario--inmuebles--piso--container">
                                    <Piso piso={piso}/>
                                    <div className="ajustesUsuario--inmuebles--piso--botones">
                                        <a className="ajustesUsuario--inmuebles--piso--botones--editar" onClick={()=>editar(piso.id)}><i class="fa-solid fa-square-pen"></i></a>
                                        <a className="ajustesUsuario--inmuebles--piso--botones--borrar" onClick={()=>borrar(piso.id)}><i class="fa-solid fa-square-minus"></i></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <p className="ajustesUsuario--inmuebles--"></p>
            </div>
            <div className="ajustesUsuario--cerrarSesion">
                <button onClick={(e)=>cerrarSesion(e)}>Cerrar Sesión</button>
            </div>
        </section>
    )
}