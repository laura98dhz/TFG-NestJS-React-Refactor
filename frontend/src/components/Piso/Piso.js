import Slider from "../Slider/Slider";

export default function Piso(props){
    return(

        <div className="piso--container">
            <div className="piso--foto">
                <Slider/>
            </div>
            <div className="piso--detalles">
                <div className="piso--detalles--precio">
                    <p> €</p>
                </div>
                <div className="piso--detalles--ubicacion">
                    <p> en </p>
                </div>
                <div className="piso--detalles--otrosDetalles">
                    <p>habs.</p>
                    <p> baños</p>
                    <p> &#13217;</p>
                </div>
                <div className="piso--detalles--descripcion">
                    <p></p>
                </div>
            </div>
        </div>
    )
}