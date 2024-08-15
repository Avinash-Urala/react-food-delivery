const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary d-flex flex-row">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            width="50"
            height="44"
            src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"
          />
        </a>
        <div className="col-sm-4 align-items-center">
          <ul className="d-flex flex-row justify-content-between  nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
