import logo from '../../Recursos/img/logo2.png';
import Menu from '../Menu/Menu';
import Piso from '../Piso/Piso'


import { useRef, useState, useEffect } from "react";

function Pisos(props) {

    const [pisos, setPisos] = useState([]);

    const [skip, setSkip] = useState(0);

    const next = useRef(null);
    const previous = useRef(null);

    function botones(datos) {
        console.log(datos[1])
        if (datos[1] >= 5) {
            next.current.style.display = "inline";
        } else if (datos[1] <= 5) {
            next.current.style.display = "none";
        }
        if (skip + 5 >= datos[1]) {
            next.current.style.display = "none";
        }
        if (skip === 0) {
            previous.current.style.display = "none";
        } else {
            previous.current.style.display = "inline";
        }
    }

    useEffect(() => {
        if (props.ubicacion !== "") {

            fetch("http://localhost:8080/inmuebles/" + props.ubicacion + "?limit=5&skip=" + skip + "&operacion=" + props.opcion, {
                'method': 'GET',
                'headers': { 'Content-Type': 'application/json' },
            }).then(result => {
                return result.json();
            }).then(datos => {
                setPisos(datos);
                botones(datos);
            })
            .catch(err => console.log('Solicitud fallida', err));


        } else if (props.ubicacion === "") {

            fetch("http://localhost:8080/inmuebles/getAll?limit=5&skip=" + skip + "&operacion=" + props.opcion, {
                'method': 'GET',
                'headers': { 'Content-Type': 'application/json' },
            }).then(result => {
                return result.json();
            }).then(datos => {
                setPisos(datos);
                botones(datos);
            })
            .catch(err => console.log('Solicitud fallida', err));

        }
    }, [skip])



    function previousPage(e) {
        e.nativeEvent.preventDefault();
        setSkip(skip - 5);
    }

    function nextPage(e) {
        e.nativeEvent.preventDefault();
        setSkip(skip + 5);
    }

    function filtrosSelected(tipoInmueble, precioMaximo, precioMinimo,habitaciones, ba??os, superficieMaxima, superficieMinima){
        fetch("http://localhost:8080/inmuebles/filter?ubicacion=" + props.ubicacion + "&opcion=" + props.opcion + "&tipo=" + tipoInmueble + "&precioMin=" + precioMinimo + "&precioMax=" + precioMaximo + "&habitaciones=" + habitaciones + "&banos=" + ba??os + "&superficieMin=" + superficieMinima + "&superficieMax=" + superficieMaxima + "&limit=5&skip=" + skip , {
                'method': 'GET',
                'headers': { 'Content-Type': 'application/json' },
            }).then(result => {
                return result.json();
            }).then(datos => {
                setPisos(datos);
                botones(datos);
            })
            .catch(err => console.log('Solicitud fallida', err));
    }

    console.log(pisos);
    console.log(pisos[0])
    return (
        <>
            <main className='main'>
                <Menu filtros={filtrosSelected}/>
                <section className='main-pisos'>
                    {
                        pisos[1] === 0 ? <p>No hay inmuebles</p> : (
                            pisos[0]?.map(function (piso) {
                                return (
                                    <Piso piso={piso} />
                                )
                            })
                        )
                    }
                    <div className='main-pisos-div'>

                    </div>
                    <div className='main-pisos-botones'>
                        <button ref={previous} onClick={(e) => previousPage(e)} className='main-pisos-botones--previous'>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button ref={next} onClick={(e) => nextPage(e)} className='main-pisos-botones--next'>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Pisos;