import { useRef } from "react";

function Registro (props){
    
    const usuario = useRef(null);
    const correo = useRef(null);
    const contraseña = useRef(null);
    
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
        })
        .catch(err => console.log('Solicitud fallida', err));
        
        fetch("http://localhost:8080/mails/welcome?email="+ correo.current.value + "&name=" + usuario.current.value, { 
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' } 
        })
        .catch(err => console.log('Solicitud fallida', err)); 

        props.cerrarRegistro();
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

                    <div className="registro-usuario">
                        <p className="registro-usuario-texto">Nombre de Usuario</p>
                        <input ref={usuario} type='text' className="registro-usuario-caja"></input>
                    </div>

                    <div className="registro-email">
                        <p className="registro-email-texto">Email</p>
                        <input ref={correo} type='email' className="registro-email-caja"></input>
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
                        <i class="fa-brands fa-facebook registro-redes-facebook"></i>
                        <i class="fa-brands fa-google-plus registro-redes-google"></i>
                    </div> */}
                    
                    <button className="registro-boton" onClick={(e)=>crearUsuario(e)}>Registrarse</button>

                </form>
                <i class="fa-solid fa-xmark acceder-cruz" onClick={()=> props.cerrarRegistro()}></i>
            </div>
        </section>
        </>
    )
}
export default Registro;