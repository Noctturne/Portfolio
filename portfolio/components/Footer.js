import React from 'react';

const Footer = () => {
    return (
        <section className="footer vh-100 bg-footer text-center">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <ul className="nav justify-content-center">
                  <li className="nav-item">
                      <a className="nav-link link-light" href="#develop" target="_blank"> <i class="fab fa-linkedin-in fa-2x"></i> </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link link-light" href="https://github.com/Noctturne" target="_blank"> <i class="fab fa-github-alt fa-2x"></i> </a>
                  </li>
              </ul>
              <small className="text-light"> @Noctturne. Landing page desarrollada en Next JS </small>
              <small className="text-light"> Background images:  <a className="link-light" href="https://www.freepik.es/" target="_blank"> Freepik </a></small>
          </div>
        </section>
    )
}

export default Footer;