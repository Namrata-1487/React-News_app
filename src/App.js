import React from "react";
import "./style.css";
import { Container, Dropdown, Nav, Navbar, NavLink, Row, Col } from "react-bootstrap";
// import NewsItem from "./components/NewsItem";
function App() {
  // const [category, setCategory] = useState(" ");

  // const handleCategoryClick = (category) => {
  //   setCategory(category);
  // }
  return (
    <>
      <Container className="bg-light container-fluid w-auto p-0 m-0">
        <Navbar className="m-0 p-3  bg-dark w-100">
          <Row className="bg-dark m-0 w-100">
            <Col className="col-9">
              <Navbar.Brand className="fw-bold text-white w-100 fs-3 ps-5" href="/">
                logo
              </Navbar.Brand></Col>
            <Col className=" col-3 "> <Nav className="m-0 p-0 justify-content-center">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  categories
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Geneal</Dropdown.Item>
                  <Dropdown.Item href="/">Technology</Dropdown.Item>
                  <Dropdown.Item href="/">Business</Dropdown.Item>
                  <Dropdown.Item href="/">Health</Dropdown.Item>
                  <Dropdown.Item href="/">Sports</Dropdown.Item>
                  <Dropdown.Item href="/">Entertainment</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav></Col>
          </Row>
        </Navbar>
        <Container className="w-100 m-0 p-0">
          <Row className="p-0 m-0 sidebarcontainer row d-flex">
            {/* verticle links  */}
            <Col className="bg-dark p-2 m-0 sidebar col-2">
              <NavLink className="fs-2 text-white nav-link mb-5 p-2">General</NavLink>
              <NavLink className="fs-2 text-white nav-link mb-5 p-2" >Technology</NavLink>
              <NavLink className="fs-2 text-white nav-link mb-5 p-2" >Business</NavLink>
              <NavLink className="fs-2 text-white nav-link mb-5 p-2" >Health</NavLink>
              <NavLink className="fs-2 text-white nav-link mb-5 p-2" >Sports</NavLink>
              <NavLink className="fs-2 text-white nav-link mb-5 p-2" >Entertainment</NavLink>
            </Col>
          </Row>
        </Container>
      </Container>

    </>
  );
}
export default App();
