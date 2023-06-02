import "./App.css";
import "./Client.css";
import "./Navbar.css";
import Client from "./components/Client";
import Navbar from "./components/Navbar";
import svgArrowDown from "./images/icon-arrow-down.svg";
import imgEmily from "./images/image-emily.jpg";
import imgJennie from "./images/image-jennie.jpg";
import imgThomas from "./images/image-thomas.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="hero">
        <div>
          <h1 className="title">WE ARE CREATIVES</h1>
          <img className="arrow-down" src={svgArrowDown} alt="arrow-down" />
        </div>
      </header>
      <section className="couple-block">
        <div className="text">
          <div className="block">
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast.Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="emphasis yellow">LEARN MORE</div>
          </div>
        </div>
        <div className="image egg"></div>
      </section>
      <section className="couple-block">
        <div className="image glass"></div>
        <div className="text">
          <div className="block">
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast.Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="emphasis">LEARN MORE</div>
          </div>
        </div>
      </section>
      <section className="couple-block text-bottom">
        <div className="image cherry">
          <div className="text">
            <div className="block">
              <h1>Graphic Design</h1>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential client's
                attention.
              </p>
            </div>
          </div>
        </div>
        <div className="image orange">
          <div className="text">
            <div className="block">
              <h1>Graphic Design</h1>
              <p>
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential client's
                attention.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <h1>CLIENT TESTIMONIALS</h1>
        <div className="group">
          <Client
            srcImg={imgEmily}
            detail="We put our trust in Sunnyside and they deliverd, making sure our needs were met and deadlines were always hit."
            name="Emily R."
            role="Marketing Director"
          />
          <Client
            srcImg={imgThomas}
            detail="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
            name="Thomas S."
            role="Chief Operating Officer"
          />
          <Client
            srcImg={imgJennie}
            detail="Incredible and result! Our sale increased over 400% when we worked with Sunnyside.Highly recommended!"
            name="Jennie F."
            role="Bussiness Owner"
          />
        </div>
      </section>
      <section className="gallery">
        <div className="row">
          <div className="image milk"></div>
          <div className="image orange"></div>
        </div>
        <div className="row">
          <div className="image cone"></div>
          <div className="image sugar"></div>
        </div>
      </section>
      <footer>
        <h1 className="logo-footer">sunnyside</h1>
        <ul className="lists">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <div className="social-media">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
