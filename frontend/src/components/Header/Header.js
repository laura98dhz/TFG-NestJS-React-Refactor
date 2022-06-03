import './header.scss';

import logo from '../../Recursos/img/logo.png'; 


function Header(props){
    
    function cargarMain(){
        props.handleOnClick();
    }

    function cargarAcceder(){
        props.accederOnClick();
    }

    function miUsuario(){
        props.ajustesOnClick()
    }

    function ponerAnuncio(){
        props.handleCargarAnuncio();
    }

    console.log("header>>>",sessionStorage.getItem('usuario'))


    return(
        <header className='header'>
            <img src={logo} className='logo' onClick={()=>cargarMain()}/>
            <div className='header__container'>
                <div className='anuncio'>
                    <button className='anuncio-boton'>
                        <i className="fa-solid fa-thumbtack anuncio-boton-icono"></i>
                        <p onClick={()=>ponerAnuncio()}>Pon tu anuncio gratis</p>
                    </button>       
                </div>
                {sessionStorage.getItem('usuario') === null ? (
                    <div className='usuario' onClick={()=>cargarAcceder()}>
                        <i className="fa-solid fa-user usuario-icono"></i>
                        <p>Acceder</p>
                    </div>
                ) : (
                    <div className='usuario'>
                        <i className="fa-solid fa-user usuario-icono"></i>
                        <p onClick={()=>miUsuario()}>{sessionStorage.getItem('usuario')}</p>
                    </div>
                )}
                
                
                <div className='idioma'>
                    <select className='idioma-select'>
                        <option>Español</option>
                        <option>English</option>
                        <option>Catalá</option>
                        <option>Deutsche</option>
                    </select> 
                </div>
                
            </div>
        </header>
    )
}

export default Header;