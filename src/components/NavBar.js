import Button from 'react-bootstrap/Button';


const NavBar = ()=> {
  return (
    <div className="nav">
      <img src="/mars-logo.png" alt="Mars Logo" />
      <h3>Employee Login</h3>
      <Button className="signup-button"> Sign Up </Button>
    </div>
  );
}

export default NavBar;