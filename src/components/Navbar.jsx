import React from "react";
import "../styles/navbar.css"


function Navbar (){
	const imagenfLecha = require('../imagenes/flecha.png');

	return(
	<div className="navbar">
					<div className="Logo">
					<img className="imagenes-flecha" src={imagenfLecha}
						alt="imagen de una flecha"/>	WALTER TOSCANO
					</div>
					<div className="contendor-secundario">
						<div className="opcion-1"><img className="imagenes-flecha" src={imagenfLecha}
						alt="imagen de una flecha"/>Contacto</div>
 					<div className="opcion-2"><img className="imagenes-flecha" src={imagenfLecha}
						alt="imagen de una flecha"/>Info</div>
 					<div className="opcion-3"><img className="imagenes-flecha" src={imagenfLecha}
						alt="imagen de una flecha"/>Curriculum</div>
					</div>

	</div>
	);
}

export default Navbar;