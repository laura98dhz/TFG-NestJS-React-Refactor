function Menu(props){
    function devolverFiltros(e){
        e.nativeEvent.preventDefault();
        props.filtros(e.target.tipoInmueble.value, e.target.precioMaximo.value, e.target.precioMinimo.value, e.target.habitaciones.value, e.target.baños.value, e.target.superficieMaxima.value,e.target.superficieMinima.value,);
    }


    return(
        <nav className="menu--inmuebles--container">
            <form onSubmit={(e)=>devolverFiltros(e)}>
                <div className="menu--inmuebles--item menu--inmuebles--item--1">
                <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--1">Tipo De Inmueble</p>
                    <div>
                        <input type="radio" name="tipoInmueble" value="Piso"></input> Piso
                        <input type="radio" name="tipoInmueble" value="Casa"></input> Casa
                    </div>
                </div>
                <div className="menu--inmuebles--item menu--inmuebles--item--2">
                    <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--2">Precio</p>
                    <div>
                        Mínimo <input type="number" name="precioMinimo"></input>
                        Máximo <input type="number" name="precioMaximo"></input>
                    </div>
                </div>
                <div className="menu--inmuebles--item menu--inmuebles--item--3">
                    <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--3">Habitaciones</p>
                    <div>
                        <input type="radio" name="habitaciones" value="1"></input>1+
                        <input type="radio" name="habitaciones" value="2"></input>2+
                        <input type="radio" name="habitaciones" value="3"></input>3+
                        <input type="radio" name="habitaciones" value="4"></input>4+
                    </div>
                </div>
                <div className="menu--inmuebles--item menu--inmuebles--item--4">
                    <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--4">Baños</p>
                    <div>
                        <input type="radio" name="baños" value="1"></input>1+
                        <input type="radio" name="baños" value="2"></input>2+
                        <input type="radio" name="baños" value="3"></input>3+
                    </div>
                </div>
                <div className="menu--inmuebles--item menu--inmuebles--item--5">
                    <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--5">Superficie</p>
                    <div>
                        Mínima <input type="number" name="superficieMinima"></input>
                        Máxima <input type="number" name="superficieMaxima"></input>
                    </div>
                </div> 
                <input className="menu--inmuebles--item--boton" type="submit" value="Filtrar"></input>
            </form>
        </nav>
    )
}
export default Menu;