import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faCode, faGlobe, faTabletAlt } from "@fortawesome/free-solid-svg-icons";
import { faWordpress, faJsSquare } from "@fortawesome/free-brands-svg-icons";

const Design = () => {
    return (
        <section className="design">
            <div className="row m-2">
                <h1 className="display-3 text-secondary text-center fw-bold"><strong> Diseño<span className="text-primary">_</span> </strong></h1>
                <div className="text-center">
                    <p> Puedes ver el diseño del portafolio 
                        <a className="link-primary" href="https://github.com/Noctturne/Portfolio" target="_blank" rel="noreferrer"> 
                            <strong> aquí</strong> 
                        </a>
                    </p>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <div className="card p-2 text-center">
                            <div className="card-img-top p-2">
                                <FontAwesomeIcon icon={faPaintBrush} size="3x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> MOCKUPS </h5>
                                <h6 className="card-subtitle text-muted"> Photoshop || Clip Studio  </h6>
                                <p className="card-text py-4"> Comienzo haciendo el layout, retocando imágenes y teniendo una idea básica de tipografía y colores. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <div className="card p-2 text-center">
                            <div className="card-img-top p-2">
                                <FontAwesomeIcon icon={faCode} size="3x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> BÁSICOS </h5>
                                <h6 className="card-subtitle text-muted"> HTML || CSS || SCSS </h6>
                                <p className="card-text py-4"> Suelo apoyarme en algún framework como Bootstrap, Material UI o UIKit. Diseño botones, links, párrafos, encabezados... </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <div className="card p-2 text-center">
                            <div className="card-img-top p-2">
                                <FontAwesomeIcon icon={faWordpress} size="3x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> CMS </h5>
                                <h6 className="card-subtitle text-muted"> Wordpress || Strapi </h6>
                                <p className="card-text py-4"> Sigo aprendiendo e-commerce y los gestores de contenido me permiten modificar o añadir funcionalidades y elementos. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <div className="card p-2 text-center">
                            <div className="card-img-top p-2">
                                <FontAwesomeIcon icon={faGlobe} size="3x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> SEO </h5>
                                <p className="card-text py-4"> Mi asignatura pendiente. Intento maquetar y optimizar al máximo el código. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <div className="card p-2 text-center">
                            <div className="card-img-top p-2">
                                <FontAwesomeIcon icon={faTabletAlt} size="3x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> RESPONSIVE </h5>
                                <h6 className="card-subtitle text-muted"> Media Queries </h6>
                                <p className="card-text py-4"> La experiencia de usuario es importante y todos mis trabajos son 100% responsivos y adaptados a cada dispositivo. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mb-4">
                        <div className="card p-2 text-center">
                            <div className="card-img-top p-2">
                                <FontAwesomeIcon icon={faJsSquare} size="3x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> PLUGINS Y ANIMACIONES </h5>
                                <h6 className="card-subtitle text-muted"> Javascript </h6>
                                <p className="card-text py-4"> Saber cuándo colocar una animación sin sobrecargar la página y añadir funcionalidades acorde al proyecto realizado. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Design;