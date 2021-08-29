import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faVuejs, faAngular, faJava, faLaravel } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
const Develop = () => {
    return (
        <section className="develop bg-primary">
            <div className="row">
                <h1 className="display-3 text-light text-center fw-bold"><strong> Desarrollo<span className="text-light">_</span> </strong></h1>
            </div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div class="col-12 col-sm-6 col-lg-4 my-2">
                        <div className="card p-4">
                            <div className="card-img-top p-2 text-center">
                                <FontAwesomeIcon icon={faReact} size="2x"/>
                                <FontAwesomeIcon icon={faVuejs} size="2x"/>
                                <FontAwesomeIcon icon={faAngular} size="2x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Desarrollo Front-end </h5>
                                <h6 className="card-subtitle mb-2 text-muted"> React / Next </h6>
                                <h6 className="card-subtitle mb-2 text-muted"> Vue </h6>
                                <h6 className="card-subtitle mb-2 text-muted"> Angular </h6>
                                <p className="card-text"> Proyecto e-commerce con Vue, Strapi y SQLite. </p>
                                <a href="https://github.com/Noctturne/Vue-Strapi-Minimmal" target="_blank" className="nav-link" rel="noreferrer"> Ver en Github </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 my-2">
                        <div className="card bg-secondary p-4">
                            <div className="card-img-top p-2 text-center">
                                <FontAwesomeIcon icon={faServer} size="2x" className="text-light"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-light"> Desarrollo Back-end </h5>
                                <h6 className="card-subtitle mb-2 text-muted"> Node </h6>
                                <h6 className="card-subtitle mb-2 text-muted"> MySQL / MongoDB</h6>
                                <h6 className="card-subtitle mb-2 text-muted"> Firebase </h6>
                                <p className="card-text text-light">Proyecto desarrollado con Node para compartir archivos.</p>
                                <a className="btn btn-outline-primary m-2" href="https://github.com/Noctturne/React-Next-MERN-SendUp-Server" target="_blank" rel="noreferrer"> Ver en Github </a>
                            </div>
                        </div>
                    </div>

                    <div class="w-100"></div>

                    <div class="col-12 col-sm-6 col-lg-4 my-2">
                        <div className="card bg-secondary p-4">
                            <div className="card-img-top p-2 text-center">
                                <FontAwesomeIcon icon={faJava} size="2x" className="text-light"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-light"> Microservicios </h5>
                                <h6 className="card-subtitle mb-2 text-muted"> Java </h6>
                                <h6 className="card-subtitle mb-2 text-muted"> Spring Boot </h6>
                                <p className="card-text text-light"> Aplicación para añadir, editar, eliminar y listar usuarios. </p>
                                <a className="btn btn-outline-primary m-2" href="https://github.com/Noctturne/Angular-Spring-Started-Client" target="_blank" rel="noreferrer"> Cliente </a>
                                <a className="btn btn-outline-primary m-2" href="https://github.com/Noctturne/Angular-Spring-Started-Server" target="_blank" rel="noreferrer" > Servidor </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4 my-2">
                        <div className="card p-4">
                        <div className="card-img-top p-2 text-center">
                                <FontAwesomeIcon icon={faLaravel} size="2x"/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Actualmente aprendiendo... </h5>
                                <h6 className="card-subtitle mb-2 text-muted"> Laravel </h6>
                                <p className="card-text"> Proyecto "meetup", busca eventos en tu zona. </p>
                                <a href="https://github.com/Noctturne/Vue-Laravel-Tails" target="_blank" className="nav-link" rel="noreferrer"> Ver en Github </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Develop;