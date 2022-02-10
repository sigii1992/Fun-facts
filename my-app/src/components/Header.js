import logo from '../assets/logo.png';

function Header() {
  return (
    <div>
      <img src={logo} alt="" width="100px" />
      <h1 className="header">Fun Facts You Probably Never Knew!</h1>
      <h3>Guaranteed to Totally Blow Your Mind</h3>
    </div>
  );
}

export default Header;