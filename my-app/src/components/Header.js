import logo from '../assets/logo.png';
import '../styles.css'

function Header() {
  return (
    <nav className="nav-bar">
      <img className="logo" src={logo} alt="" />
      <h2>Did You Know?</h2>
    </nav>
  );
}

export default Header;