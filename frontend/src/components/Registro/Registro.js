import { useRef, useState } from "react";

function Registro (props){
    const [mensajeError, setMensajeError] = useState("");
    
    const usuario = useRef(null);
    const correo = useRef(null);
    const contraseña = useRef(null);
    
    // const usuarioContainer = useRef("");
    // const mailContainer = useRef("");
    // const contraseñaContainer = useRef("");

    function crearUsuario(e){
        e.nativeEvent.preventDefault();

        fetch("http://localhost:8080/usuarios", { 
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'nombreUsuario': usuario.current.value,
                'contraseña': contraseña.current.value,
                'correo': correo.current.value
            })
        }).then( result => {
            return result.json();
        }).then( result => {
            if(result.message !== undefined){
                
                if(usuario.current.value === ""){
                    console.log("user vacio")
                    usuario.current.style.borderBottom = "3px solid red";
                }else{
                    usuario.current.style.borderBottom = "";
                }
        
                if(correo.current.value === ""){
                    console.log("correo vacio")
                    correo.current.style.borderBottom = "3px solid red";
                }else{
                    correo.current.style.borderBottom = "";
                }

                if(contraseña.current.value === ""){
                    console.log("contraeña vacio")
                    contraseña.current.style.borderBottom = "3px solid red";
                }else{
                    contraseña.current.style.borderBottom = "";
                }

                if(result.message === "Ese usuario ya existe"){
                    setMensajeError("Ese usuario ya existe");
                }else{
                    setMensajeError("");
                }
            }else{
                console.log(2)
                usuario.current.style.borderBottom = "";
                correo.current.style.borderBottom = "";
                contraseña.current.style.borderBottom = "";
 
                fetch("http://localhost:8080/mails/welcome?email="+ correo.current.value + "&name=" + usuario.current.value, { 
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json' } 
                })
                .catch(err => console.log('Solicitud fallida', err)); 
                
                setMensajeError("");
                props.cerrarRegistro();
            }
          
        })
        .catch(err => console.log('Solicitud fallida', err));
        
    }


    return(
        <>
        <div className="registro-container-atras">
        </div>
        <section className="registro">
            
            <div className="registro-container">
                <form className="registro-form">
                    
                    <div className="registro-titulo">
                        <h2>Registrate</h2>
                    </div>
                    
                    {/* <div className="registro-nombre">
                        <p className="registro-nombre-texto">Nombre</p>
                        <input type='text' className="registro-nombre-caja"></input>
                    </div>
                    
                    <div className="registro-apellidos">
                        <p className="registro-apellidos-texto">Apellidos</p>
                        <input type='text' className="registro-apellidos-caja"></input>
                    </div> */}

                    <div className="registro-usuario" >
                        <p className="registro-usuario-texto">Nombre de Usuario</p>
                        <input ref={usuario} type='text' className="registro-usuario-caja" ></input>
                    </div>

                    <div className="registro-email">
                        <p className="registro-email-texto">Email</p>
                        <input ref={correo} type='email' className="registro-email-caja" ></input>
                    </div>

                    <div className="registro-contraseña">
                        <p className="registro-contraseña-texto">Contraseña</p>
                        <div className="registro-contraseña-container">
                            <input ref={contraseña} type='password' className="registro-contraseña-caja"></input>
                        </div>
                    </div>
{/* 
                    <div className="registro-contraseña-repetir">
                        <p className="registro-contraseña-repetir-texto">Repetir Contraseña</p>
                        <div className="registro-contraseña-repetir-container">
                            <input type='password' className="registro-contraseña-repetir-caja"></input>
                        </div>
                    </div> */}

                    {/* <div className="registro-redes">
                        <i className="fa-brands fa-facebook registro-redes-facebook"></i>
                        <i className="fa-brands fa-google-plus registro-redes-google"></i>
                    </div> */}

                    <div className="acceder-mensaje-error">
                        <p className="acceder-mensaje-error-texto">{mensajeError}</p>
                    </div>
                    
                    <button className="registro-boton" onClick={(e)=>crearUsuario(e)}>Registrarse</button>

                </form>
                <i className="fa-solid fa-xmark acceder-cruz" onClick={()=> props.cerrarRegistro()}></i>
            </div>
        </section>
        </>
    )
}
export default Registro;