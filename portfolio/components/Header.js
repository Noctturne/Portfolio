import React from 'react';

const Header = () => {
    return (
        <section className="header vh-100 bg-secondary">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="display-1 text-light"> <strong> Noctturne<span className="text-primary">.</span></strong> </h1>

                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"> Diseña </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Desarrolla </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Descubre </a>
                    </li>
                </ul>

            </div> 
        </section>
        
    )
}

export default Header;