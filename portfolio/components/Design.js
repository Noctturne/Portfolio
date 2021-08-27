import React from 'react';

const Design = () => {
    return (
        <section className="design vh-100">
            <div className="row m-2">
                <h1 className="display-3 text-secondary text-center"><strong> Design<span className="text-primary">_</span> </strong></h1>
                <p className="text-secondary text-center fw-bold"> I want to show you my own projects. </p>
            </div>
            <div className="row m-2">
                <div className="col-sm-7 p-5">
                    <div className="m-2">
                        <img src="/assets/img/roman-screenshot.png" className="img-fluid img-thumbnail shadow" alt="Screenshot"></img>
                    </div>
                </div>
                <div className="col-sm-5 align-self-center">
                    <div className="card shadow m-2">
                        <div className="card-body">
                            <h5 className="card-title"><span className="text-primary"> - </span> Web design:</h5>
                            <p className="card-text ps-4"> Photoshop || Clip Studio </p>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow m-2">
                        <div className="card-body">
                            <h5 className="card-title"><span className="text-primary"> - </span> Basics:</h5>
                            <p className="card-text ps-4"> HTML || CSS || Javascript </p>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: '90%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow m-2">
                        <div className="card-body">
                            <h5 className="card-title"><span className="text-primary"> - </span> Frameworks:</h5>
                            <p className="card-text ps-4"> Bootstrap || Material UI || UIKIT || ... </p>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow m-2">
                        <div className="card-body">
                            <h5 className="card-title"><span className="text-primary"> - </span> CMS:</h5>
                            <p className="card-text ps-4"> Wordpress || Strapi  </p>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" style={{width: '65%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card shadow m-2">
                        <div className="card-body">
                            <h5 className="card-title"><span className="text-primary"> - </span> Currently learning:</h5>
                            <p className="card-text ps-4"> UX </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12 text-center p-2">
                <button type="button" className="btn btn-primary text-center text-light"> Show more </button>
            </div>
        </section>
    )
}

export default Design;