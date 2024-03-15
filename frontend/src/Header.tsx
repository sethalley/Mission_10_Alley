import logo from './bowling-logo.jpg';

function Header(props: any) {
  return (
    <header className="row">
      <div className="col4">
        <img src={logo} className="Logo" alt="logo" />
      </div>
      <div className="col subtitle">{props.title}</div>
    </header>
  );
}

export default Header;
