import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'infinite-react-carousel';

import { useEffect, useState } from "react";



export default function Sliders(props) {


    const [rutas, setRutas] = useState([]);
    const [path, setPath] = useState([]);
    const [img, setImg] = useState(null);
   
   
    const fetchImage = async () => {
        const res = await fetch("http://localhost:8080/imagenes/getImage", {
                    'method': 'POST',
                    'headers': { 'Content-Type': 'application/json' },
                    'body': JSON.stringify({
                        "path": "upload\\piso2-b8eapiso2.jpg"
                    })
        });
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        
        setImg(imageObjectURL);
      };
   
    useEffect(()=>{

        fetch("http://localhost:8080/imagenes/getPaths/" + props.id, {
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },
        }).then(result => {
            return result.json();
        }).then(datos => {
            setRutas(datos);
            setPath(datos[0].path)
        }).catch(err => console.log('Solicitud fallida', err));
        
        fetchImage();


    //     fetch("http://localhost:8080/imagenes/getImage", {
    //         'method': 'POST',
    //         'headers': { 'Content-Type': 'application/json' },
    //         'body': JSON.stringify({
    //             "path": "upload\\piso2-b8eapiso2.jpg"
    //         })
    //     }).then(function(res){
    //         return(
    //             res.blob
    //         )
        
    //     }).then((imgBlob)=>{
        
    //         setImg(URL.createObjectURL(imgBlob)) 
    //         console.log(URL.createObjectURL(imgBlob))
    //     }).catch(err => console.log('Solicitud fallida', err));
        
    },[])
console.log(img)
    // if(img !== null){
        
    //     console.log(img);
    // }

    // const fetchImage = async () => {
    //     const res = await fetch("http://localhost:8080/imagenes/getImage", {
    //         'method': 'POST',
    //         'headers': { 'Content-Type': 'application/json' },
    //         'body': JSON.stringify({
    //             "path": "upload\\piso2-b8eapiso2.jpg"
    //         })
    //     });
    //     const imageBlob = await res.blob();
    //     const imageObjectURL = URL.createObjectURL(imageBlob);
    //     setImg(imageObjectURL);
    // }
    // useEffect(() => {
    //     fetchImage();
    //   }, []);

    //   console.log(img)
    return (
        <section className="slider">

            { rutas.length !==0 ? (
                <Slider dots>
                    {
                        rutas.map(function () {
                            return (
                                <div className="slider--container">
                                    <img className="img"></img>
                                </div>
                            )
                        })
                    }
                </Slider>
            ) : "" }

        </section>
    );


}