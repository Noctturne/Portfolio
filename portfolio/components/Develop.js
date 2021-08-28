import React from 'react';

const Develop = () => {
    return (
        <section className="design vh-100 bg-primary">
            <div className="row">
                <h1 className="display-3 text-light text-center fw-bold"><strong> Desarrollo <span className="text-light">_</span> </strong></h1>
                <p className="text-light text-center fw-bold"> Aquí van unos cuantos proyectos! </p>
            </div>
            <div className="row m-2">
                <div className="offset-sm-3 col-sm-3">
                    <div class="card p-4">
                        <div class="card-body">
                            <h4 class="card-title"> Desarrollo Front-end </h4>
                            <h6 class="card-subtitle mb-2 text-muted"> React / Next </h6>
                            <h6 class="card-subtitle mb-2 text-muted"> Vue </h6>
                            <h6 class="card-subtitle mb-2 text-muted"> Angular </h6>
                            <p class="card-text">Panel gestor de proyectos con JWT.</p>
                            <a href="https://github.com/Noctturne/React-TaskForce" target="_blank" class="nav-link"> Ver en Github </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div class="card bg-secondary p-4">
                        <div class="card-body">
                            <h5 class="card-title text-light"> Desarrollo Back-end </h5>
                            <h6 class="card-subtitle mb-2 text-muted"> Node </h6>
                            <h6 class="card-subtitle mb-2 text-muted"> MySQL / MongoDB</h6>
                            <h6 class="card-subtitle mb-2 text-muted"> Firebase </h6>
                            <p class="card-text text-light">Proyecto desarrollado con Node para compartir archivos.</p>
                            <a href="https://github.com/Noctturne/React-Next-MERN-SendUp-Server" target="_blank" class="nav-link"> Ver en Github </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center m-2">
                    <div class="card-body">
                        <h4 class="card-title"> Actualmente aprendiendo... </h4>
                        <h6 class="card-subtitle mb-2 text-light"> Java - JPA - Spring Boot </h6>
                        <p class="card-text text-secondary"> Aplicación para añadir, editar, eliminar y listar usuarios.</p>
                        <button type="button" class="btn btn-outline-secondary m-2" href="https://github.com/Noctturne/Angular-Spring-Started-Client" target="_blank"> Cliente </button>
                        <button type="button" class="btn btn-outline-secondary m-2" href="https://github.com/Noctturne/Angular-Spring-Started-Server" target="_blank" > Servidor </button>
                    </div>
                </div>
            </div>            
        </section>
    )
}

export default Develop;