import Slider from "../Slider/Slider";

export default function Piso(props){
    return(

        <div key={props.piso.id} className="piso--container">
            <div className="piso--foto">
                <Slider/>
            </div>
            <div className="piso--detalles">
                <div className="piso--detalles--precio">
                    <p>{props.piso.precio} €</p>
                </div>
                <div className="piso--detalles--ubicacion">
                    <p>{props.piso.tipoInmueble} en {props.piso.ubicacion}</p>
                </div>
                <div className="piso--detalles--otrosDetalles">
                    <p>{props.piso.habitaciones} habs.</p>
                    <p>{props.piso.baños} baños</p>
                    <p>{props.piso.superficie} &#13217;</p>
                </div>
                <div className="piso--detalles--descripcion">
                    <p>{props.piso.descripcion}</p>
                </div>
            </div>
        </div>
    )
}