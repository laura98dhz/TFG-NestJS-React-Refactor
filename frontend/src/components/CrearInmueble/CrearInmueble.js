import { useEffect, useState } from "react";
import axios from 'axios';

export default function CrearInmueble(props){
    
    const [archivos, setArchivos] = useState(null);

    function crearInmueble(e){
        e.nativeEvent.preventDefault(); 

        fetch("http://localhost:8080/inmuebles/" + sessionStorage.getItem("usuario"), { 
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                'ubicacion': e.target.ubicacion.value,
                'tipoInmueble': e.target.tipoInmueble.value,
                'tipoOperacion': e.target.tipoOperacion.value,
                'superficie': parseInt(e.target.superficie.value, 10),
                'habitaciones': parseInt(e.target.habitaciones.value, 10),
                'baños': parseInt(e.target.baños.value, 10),
                'precio': parseInt(e.target.precio.value, 10),
                'descripcion': e.target.descripcion.value,
                'nombreVendedor': sessionStorage.getItem('usuario')  
            })
        })
        .then((result)=>{
            return result.json();
        }).then(datos=>{
            
            console.log(datos.id)

            var f = new FormData();
            for(let i = 0; i < archivos.length; i ++){
                f.append("files", archivos[i])
            }
            axios.post('http://localhost:8080/imagenes/upload/'+datos.id,f,{'Content-Type': 'multipart/form-data'});
        })
        props.cerrarOnCLick();
    }
  
    const subirArchivos=e=>{
        setArchivos(e)
    }
    

    return(
        <>
        <div className="crear-inmueble-container-atras">
        </div>
        <section className="crear-inmueble">
            
            <div className="crear-inmueble-container">
                <form className="crear-inmueble-form" method="post"  encType="multipart/form-data" onSubmit={(e)=>crearInmueble(e)}>
                    
                    <div className="crear-inmueble-titulo">
                        <h2>Subir Inmueble</h2>
                    </div>

                    <div className="crear-inmueble-tipo-inmueble">
                        <p className="crear-inmueble-tipo-inmueble-texto">Tipo de Inmueble</p>
                        <div className="crear-inmueble-tipo-inmueble-container">
                            <input type="radio" name="tipoInmueble" value="Piso"></input>
                            <label> Piso</label>
                            <input type="radio" name="tipoInmueble" value="Casa"></input> 
                            <label> Casa</label>
                        </div>
                    </div>

                    <div className="crear-inmueble-tipo-transaccion">
                        <p className="crear-inmueble-tipo-transaccion-texto">Tipo de Transacción</p>
                        <div className="crear-inmueble-tipo-transaccion-container">
                            <input type="radio" name="tipoOperacion" value="Alquiler"></input>
                            <label> Alquiler</label>
                            <input type="radio" name="tipoOperacion" value="Venta"></input>
                            <label> Venta</label>
                        </div>
                    </div>
                    
                    <div className="crear-inmueble-precio">
                        <p className="crear-inmueble-precio-texto">Precio</p>
                        <div className="crear-inmueble-precio-container">
                            <input type='number' name="precio" className="crear-inmueble-precio-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-ubicacion">
                        <p className="crear-inmueble-ubicacion-texto">Ubicacion</p>
                        <div className="crear-inmueble-ubicacion-container">
                            <input type='text' name="ubicacion" className="crear-inmueble-ubicacion-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-superficie">
                        <p className="crear-inmueble-superficie-texto">Superficie</p>
                        <div className="crear-inmueble-superficie-container">
                            <input type='number' name="superficie" className="crear-inmueble-superficie-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-habitaciones">
                        <p className="crear-inmueble-habitaciones-texto">Número de Habitaciones</p>
                        <div className="crear-inmueble-habitaciones-container">
                            <input type='number' name="habitaciones" className="crear-inmueble-habitaciones-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-baños">
                        <p className="crear-inmueble-baños-texto">Número de Baños</p>
                        <div className="crear-inmueble-baños-container">
                            <input type='number' name="baños" className="crear-inmueble-baños-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-descripcion">
                        <p className="crear-inmueble-descripcion-texto">Descripción del Inmueble</p>
                        <div className="crear-inmueble-descripcion-container">
                            <textarea name="descripcion" className="crear-inmueble-descripcion-caja"></textarea>
                        </div>
                    </div>
                    <div className="crear-inmueble-imagen">
                        <p className="crear-inmueble-imagen-texto ">Subir Fotos</p>
                        <div className="crear-inmueble-imagen-container">
                            <input type="file" multiple name="imagenes" className="crear-inmueble-imagen-caja" onChange={(e)=> subirArchivos(e.target.files)}></input>
                        </div>
                    </div>
                    
                    <input type="submit" className="crear-inmueble-boton" value="Subir"/>

                </form>
                <i onClick={()=>props.cerrarOnCLick()} className="fa-solid fa-xmark crear-inmueble--cruz"></i>
            </div>
        </section>

        </>
    )
}