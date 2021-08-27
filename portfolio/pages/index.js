import DesignHero from '../components/DesignHero';
import Design from '../components/Design';
import DevelopHero from '../components/DevelopHero';
import Develop from '../components/Develop';


export default function Home() {
  return (
    <>
      <section className="header vh-100 bg-secondary">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <h1 className="display-1 text-light"> <strong> Noctturne<span className="text-primary">!</span></strong> </h1>

              <ul className="nav justify-content-center">
                  <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#design"> Design </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#develop"> Develop </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#discover"> Discover </a>
                  </li>
              </ul>
          </div> 
      </section>

      <DesignHero></DesignHero>

      <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" className="scrollspy" tabIndex="0">
        <section id="design" className="design">
            <Design></Design>
        </section>

        <DevelopHero></DevelopHero>

        <section id="develop" className="develop">
            <Develop></Develop>
        </section>
      </div>
    </>
  )
}




