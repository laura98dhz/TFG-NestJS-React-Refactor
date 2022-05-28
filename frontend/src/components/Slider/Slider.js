import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img2 from './img/hipoteca.jpg';
import img3 from './img/hipoteca2.jpg';
import img1 from './img/fondoPaginaPrincipal.jpg';

export default function Slider() {

    return(
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
        </Carousel>   
    );

    
}