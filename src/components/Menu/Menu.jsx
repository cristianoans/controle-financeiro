
import "./Menu.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import icone from "../../assets/icons/icone.png"
import { logout } from "../../firebase/auth";
import { toast } from "react-hot-toast";

export function Menu() {
  const navigate = useNavigate();
  function onLogout(){
    logout()
    .then(() => {
        toast.success(`logout com sucesso!`, {position: 'top-center', duration: 3000});
        navigate("/")
    })
    .catch((error) => {
        toast.error(error.message)
    });
}


  return (
    <Navbar bg="gray" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={icone} width="50" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => onLogout()}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}