function Menu(){
    return(
        <nav className="menu--inmuebles--container">
            <form>
                <div className="menu--inmuebles--item menu--inmuebles--item--1">
                <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--1">Tipo De Inmueble</p>
                    <div>
                        <input type="checkbox" name="tipoInmueble" value="Piso"></input> Piso
                        <input type="checkbox" name="tipoInmueble" value="Casa"></input> Casa
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
                        <input type="submit" name="habitaciones" value="1+"></input>
                        <input type="submit" name="habitaciones" value="2+"></input>
                        <input type="submit" name="habitaciones" value="3+"></input>
                        <input type="submit" name="habitaciones" value="4+"></input>
                    </div>
                </div>
                <div className="menu--inmuebles--item menu--inmuebles--item--4">
                    <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--4">Baños</p>
                    <div>
                        <input type="submit" name="baños" value="1+"></input>
                        <input type="submit" name="baños" value="2+"></input>
                        <input type="submit" name="baños" value="3+"></input>
                    </div>
                </div>
                <div className="menu--inmuebles--item menu--inmuebles--item--5">
                    <p className="menu--inmuebles--item--texto menu--inmuebles--item--texto--5">Superficie</p>
                    <div>
                        Mínima <input type="number" name="superficieMinimo"></input>
                        Máxima <input type="number" name="superficieMaximo"></input>
                    </div>
                </div> 
                <input className="menu--inmuebles--item--boton" type="submit" value="Filtrar"></input>
            </form>
        </nav>
    )
}
export default Menu;