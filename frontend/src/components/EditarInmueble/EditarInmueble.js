import { useEffect, useState } from "react";

export default function EditarInmueble(props){
    const [inmueble, setInmueble] = useState([])
    
    useEffect(()=>{

        setInmueble(fetch("http://localhost:8080/inmuebles/id/" + props.id, { 
                                                'method': 'GET',
                                                'headers': { 'Content-Type': 'application/json' }  
                                            })
                                            .then(result => {
                                                return result.json()
                                            })
                                            .then( dato => {
                                                setInmueble(dato)
                                            })
                                            .catch(err => console.log('Solicitud fallida', err))
                                        )
        
    },[])

    function editarInmueble(e){
        e.nativeEvent.preventDefault();

        if(e.target.precio.value===""){
            e.target.precio.value=inmueble.precio;
        }

        if(e.target.ubicacion.value===""){
            e.target.ubicacion.value=inmueble.ubicacion;
        }

        if(e.target.superficie.value===""){
            e.target.superficie.value=inmueble.superficie;
        }

        if(e.target.habitaciones.value===""){
            e.target.habitaciones.value=inmueble.habitaciones;
        }

        if(e.target.baños.value===""){
            e.target.baños.value=inmueble.baños;
        }

        
        if(e.target.descripcion.value===""){
            e.target.descripcion.value=inmueble.descripcion;
        }

        if(e.target.tipoInmueble.value===""){
            e.target.tipoInmueble.value=inmueble.tipoInmueble;
        }

        if(e.target.tipoOperacion.value===""){
            e.target.tipoOperacion.value=inmueble.tipoOperacion;
        }

        fetch("http://localhost:8080/inmuebles"+'/'+ props.id, { 
            'method': 'PUT',
            'headers': { 'Content-Type': 'application/json' },    
            'body': JSON.stringify({
                    'ubicacion': e.target.ubicacion.value,
                    'tipoInmueble': e.target.tipoInmueble.value,
                    'tipoOperacion': e.target.tipoOperacion.value,
                    'superficie': parseInt(e.target.superficie.value, 10),
                    'habitaciones': parseInt(e.target.habitaciones.value, 10),
                    'baños': parseInt(e.target.baños.value, 10),
                    'precio': parseInt(e.target.precio.value, 10),
                    'descripcion': e.target.descripcion.value
                })
            })
            .catch(err => console.log('Solicitud fallida', err));
        
    }

    return(
        <>
        <div className="Editar-inmueble-container-atras">
        </div>
        <section className="Editar-inmueble">
            
            <div className="Editar-inmueble-container">
                <form className="Editar-inmueble-form" onSubmit={(e)=>editarInmueble(e)}>
                    
                    <div className="Editar-inmueble-titulo">
                        <h2>Editar Inmueble</h2>
                    </div>

                    <div className="Editar-inmueble-tipo-inmueble">
                        <p className="Editar-inmueble-tipo-inmueble-texto">Tipo de Inmueble</p>
                        <div className="Editar-inmueble-tipo-inmueble-container">
                            <input type="radio" name="tipoInmueble" value="Piso"></input>
                            <label> Piso</label>
                            <input type="radio" name="tipoInmueble" value="Casa"></input> 
                            <label> Casa</label>
                        </div>
                    </div>

                    <div className="Editar-inmueble-tipo-transaccion">
                        <p className="Editar-inmueble-tipo-transaccion-texto">Tipo de Transacción</p>
                        <div className="Editar-inmueble-tipo-transaccion-container">
                            <input type="radio" name="tipoOperacion" value="Alquiler"></input>
                            <label> Alquiler</label>
                            <input type="radio" name="tipoOperacion" value="Venta"></input>
                            <label> Venta</label>
                        </div>
                    </div>
                    
                    <div className="Editar-inmueble-precio">
                        <p className="Editar-inmueble-precio-texto">Precio</p>
                        <div className="Editar-inmueble-precio-container">
                            <input placeholder={inmueble.precio} type='number' name="precio" className="Editar-inmueble-precio-caja"></input>
                        </div>
                    </div>

                    <div className="Editar-inmueble-ubicacion">
                        <p className="Editar-inmueble-ubicacion-texto">Ubicacion</p>
                        <div className="Editar-inmueble-ubicacion-container">
                            <input placeholder={inmueble.ubicacion} type='text' name="ubicacion" className="Editar-inmueble-ubicacion-caja"></input>
                        </div>
                    </div>

                    <div className="Editar-inmueble-superficie">
                        <p className="Editar-inmueble-superficie-texto">Superficie</p>
                        <div className="Editar-inmueble-superficie-container">
                            <input placeholder={inmueble.superficie} type='number' name="superficie" className="Editar-inmueble-superficie-caja"></input>
                        </div>
                    </div>

                    <div className="Editar-inmueble-habitaciones">
                        <p className="Editar-inmueble-habitaciones-texto">Número de Habitaciones</p>
                        <div className="Editar-inmueble-habitaciones-container">
                            <input placeholder={inmueble.habitaciones} type='number' name="habitaciones" className="Editar-inmueble-habitaciones-caja"></input>
                        </div>
                    </div>

                    <div className="Editar-inmueble-baños">
                        <p className="Editar-inmueble-baños-texto">Número de Baños</p>
                        <div className="Editar-inmueble-baños-container">
                            <input placeholder={inmueble.baños} type='number' name="baños" className="Editar-inmueble-baños-caja"></input>
                        </div>
                    </div>

                    <div className="Editar-inmueble-descripcion">
                        <p className="Editar-inmueble-descripcion-texto">Descripción del Inmueble</p>
                        <div className="Editar-inmueble-descripcion-container">
                            <textarea placeholder={inmueble.descripcion} name="descripcion" className="Editar-inmueble-descripcion-caja"></textarea>
                        </div>
                    </div>
                    
                    <input type="submit" className="Editar-inmueble-boton" value="Guardar"/>

                </form>
                <i class="fa-solid fa-xmark Editar-inmueble--cruz" onClick={()=>{props.cerrarOnCLick()}}></i>
            </div>
        </section>
        </>
    )
}