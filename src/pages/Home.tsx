import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
  <div className="container">

    <h1 className="my-4">Welcome to Modern Business</h1>

    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Card Title</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <Link to="#" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Card Title</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
          </div>
          <div className="card-footer">
            <Link to="#" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 mb-4">
        <div className="card h-100">
          <h4 className="card-header">Card Title</h4>
          <div className="card-body">
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <Link to="#" className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </div>
    </div>

    <h2>Portfolio Heading</h2>

    <div className="row">
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to="#">Project One</Link>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to="#">Project Two</Link>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to="#">Project Three</Link>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to="#">Project Four</Link>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to="#">Project Five</Link>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 portfolio-item">
        <div className="card h-100">
          <Link to="#"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to="#">Project Six</Link>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-6">
        <h2>Modern Business Features</h2>
        <p>The Modern Business template by Start Bootstrap includes:</p>
        <ul>
          <li>
            <strong>Bootstrap v4</strong>
          </li>
          <li>jQuery</li>
          <li>Font Awesome</li>
          <li>Working contact form with validation</li>
          <li>Unstyled page elements for easy customization</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid rounded" src="http://placehold.it/700x450" alt=""/>
      </div>
    </div>

    <hr />


    <div className="row mb-4">
      <div className="col-md-8">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
      </div>
      <div className="col-md-4">
        <Link className="btn btn-lg btn-secondary btn-block" to="#">Call to Action</Link>
      </div>
    </div>

  </div>

  );
}

export default Home;
