import * as React from "react";
import Design from '../components/Design';
import Develop from '../components/Develop';
import Footer from '../components/Footer';


export default function Home() {
    React.useEffect(() => {
        scrollTop();
      }, []);

    const scrollTop = () => {
        window.scroll(0, window.pageYOffset - 5000);
    }

  return (
    <>
      <section className="header vh-100 bg-secondary">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="display-1 text-light animate__animated animate__headShake"> <strong> Noctturne
                    <span className="text-primary animate__animated animate__backInDown">!</span>
                    </strong> 
                </h1>

              <ul className="nav justify-content-center">
                  <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#design"> Diseño </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#develop"> Desarrollo </a>
                  </li>
              </ul>
          </div> 
      </section>

      <section className="design vh-100 h-75 bg-design"></section>

      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" className="scrollspy" tabIndex="0">
          <section id="design" className="design">
              <Design></Design>
          </section>

          <section className="design vh-100 h-75 bg-develop"></section>

          <section id="develop" className="develop">
              <Develop></Develop>
          </section>
      </div>
      <Footer></Footer>
      <button class="btn btn-secondary btn-floating position-fixed rounded-circle scrollTop" title="Go to top"><i className="fas fa-chevron-up text-light"
        onClick={scrollTop}></i></button>
    </>
  )
}




