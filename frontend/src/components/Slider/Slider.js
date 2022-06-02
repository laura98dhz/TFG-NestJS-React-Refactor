import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'infinite-react-carousel';

import img from './img/fondoPaginaPrincipal.jpg';


export default function Sliders() {

    return(
        <section className="slider">

            <Slider dots>
                <div className="slider--container">
                    <img src={img} className="img"></img>
                </div>
                <div className="slider--container">
                    <img src={img} className="img"></img>
                </div>
                <div className="slider--container">
                    <img src={img} className="img"></img>
                </div>                
            </Slider>

        </section>
    );

    
}