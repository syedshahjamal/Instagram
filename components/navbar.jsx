import {Nav, Navbar, Container, Image, NavItem, Button} from "react-bootstrap"
import {signIn} from "next-auth/react"
import { useState } from "react";
function Navbar1(){
  const [IsLogin,setIsLogin]=useState();
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/"><Image src="../i.png" alt="Instagram" width="150px" height="30px"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <NavItem className="me-left">
              <Nav >
                <Button onClick={()=> signIn()}>
                  Sign In
                </Button>
                <Nav.Link href="/signUp">Sign Up</Nav.Link>
              </Nav>
            </NavItem>
          </Container>
        </Navbar>
      );
    
}

export default Navbar1;