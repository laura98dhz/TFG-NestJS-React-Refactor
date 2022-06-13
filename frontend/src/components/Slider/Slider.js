import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'infinite-react-carousel';

import { useEffect, useState } from "react";

export default function Sliders(props) {

    const [rutas, setRutas] = useState([]);
    const [path, setPath] = useState([]);
   
    useEffect(()=>{

        fetch("http://localhost:8080/imagenes/getPaths/" + props.id, {
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },
        }).then(result => {
            return result.json();
        }).then(datos => {
            setRutas(datos);
            setPath(datos[0].path);
        }).catch(err => console.log('Solicitud fallida', err));  

    },[])


    return (
        <section className="slider">
            { rutas.length !==0 ? (
                <Slider dots>
                    {
                        rutas.map(function (ruta) {
                            console.log(ruta.path);

                            return (
                                <div className="slider--container" key={ruta.path}>
                                    <img className="img" src={"http://localhost/xampp/TFG-NestJS-React-Refactor/backend/" + ruta.path}></img>
                                </div>
                            )
                        })
                    }
                </Slider>
            ) : ""}

        </section>
    );
}