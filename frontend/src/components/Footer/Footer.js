function Footer(){
    return(
        <footer className="footer">
            <div className="footer-container">
                <h2 className="footer-titulo">Contáctenos</h2>
                <form className="footer-form">
                    <input type='text' placeholder="Nombre"></input>
                    <input type='text' placeholder="Apellidos"></input>
                    <input type='email' placeholder="Email"></input>
                    <input type='text' placeholder="Motivo"></input>
                    <input type='text' placeholder="Escriba su mensaje"></input>
                    <button>Enviar</button>
                </form>
            </div> 
            
            <div className="footer-redes-sociales-container">
                <h2 className="footer-redes-sociales-titulo">Redes Sociales</h2>
                <ul className="footer-redes-sociales-lista">
                    <li>
                        <i class="fa-brands fa-facebook-square"></i>
                        <span>Siguenos en Facebook</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-instagram"></i>
                        <span>Siguenos en Instagram</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-twitter-square"></i>
                        <span>Siguenos en Twitter</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-youtube"></i>
                        <span>Siguenos en YouTube</span>
                    </li>
                    <li>
                        <i class="fa-brands fa-linkedin"></i>
                        <span>Siguenos en Linkedin</span>
                    </li>
                
                </ul>
            </div> 

            <div className="footer-ubicacion-container">
                <h2 className="footer-ubicacion-titulo">Datos De Contacto</h2>
                <ul className="footer-ubicacion-lista">
                    <li>
                        <i class="fa-solid fa-map-pin"></i>
                        <span>Calle Serrano, 78, 28006 Madrid</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone"></i>
                        <span>916029742</span>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"></i>
                        <span>golden-houses@gmail.com</span>
                    </li>
                    <li>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.99901642151!2d-3.688797784667443!3d40.43102067936335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289461055981%3A0x752a4c5d14b1455c!2sC.%20Serrano%2C%2078%2C%2028006%20Madrid!5e0!3m2!1ses!2ses!4v1647451062970!5m2!1ses!2ses"></iframe>
                    </li>
                </ul>
            </div>       
        </footer>
    )
}

export default Footer;