function CalculadoraHipoteca(){
    return(
        <div className="calculadoraHipoteca-container">
            <h2 className="calculadoraHipoteca-titulo">Calcula Tu Hipoteca</h2>
            <div className="calculadoraHipoteca-form-container">
                <form className="calculadoraHipoteca-form">
                    <h3 className="calculadoraHipoteca-form-1-titulo">Precio Del Inmueble</h3>
                    <input type="number" className="calculadoraHipoteca-form-1--number"></input>
                    <input type="range" className="calculadoraHipoteca-form-1--range"></input>
                    <h3 className="calculadoraHipoteca-form-2-titulo">Ahorro Aportado</h3>
                    <input type="number" className="calculadoraHipoteca-form-2--number"></input>
                    <input type="range" className="calculadoraHipoteca-form-2--range"></input>
                    <input type="submit" value="Calcular" className="calculadoraHipoteca-form-btn"></input>
                </form>
            </div>
            
        </div>
    )
}

export default CalculadoraHipoteca;