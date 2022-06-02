import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'infinite-react-carousel';

import img from './img/fondoPaginaPrincipal.jpg';

import { useEffect, useState } from "react";



export default function Sliders(props) {


    const [rutas, setRutas] = useState([]);


        fetch("http://localhost:8080/imagenes/getPaths/" + props.id, {
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },
        }).then(result => {
            return result.json();
        }).then(datos => {
            setRutas(datos);
        }).catch(err => console.log('Solicitud fallida', err));

    return (
        <section className="slider">

            { rutas.length !==0 ? (
                <Slider dots>
                    {
                        rutas.map(function () {
                            return (
                                <div className="slider--container">
                                    <img src={img} className="img"></img>
                                </div>
                            )
                        })
                    }
                </Slider>
            ) : "" }

        </section>
    );


}