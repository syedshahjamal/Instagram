import {
  Nav,
  Navbar,
  Container,
  Image,
  NavItem,
  Button,
} from "react-bootstrap";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Router  from "next/router";
function Navbar1() {
  const [isLogin, setIsLogin] = useState();
  const currentSession = useSession();
  useEffect(() => {
    if (currentSession.status === "authenticated") {
      setIsLogin(true);
    }
    if (currentSession.status === "unauthenticated") {
      setIsLogin(false);
    }
  }, [currentSession]);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={isLogin ? "/home" : "/"}>
          <Image src="../i.png" alt="Instagram" width="150px" height="30px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavItem className="me-left">
          {!isLogin ? (
            <Nav>
              <Button
                onClick={() => signIn()}
                variant="link"
                style={{ textDecoration: "none" }}
                className="text-secondary"
              >
                Sign In
              </Button>
              <Button
                href="/signUp"
                variant="link"
                style={{ textDecoration: "none" }}
                className="text-secondary"
              >
                Sign Up
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Button
                onClick={() => {
                  Router.push("/profile");
                }}
                variant="link"
                style={{ textDecoration: "none" }}
                className="text-secondary"
              >
                Profile
              </Button>
              <Button
                onClick={() => {
                  signOut();
                }}
                variant="link"
                style={{ textDecoration: "none" }}
                className="text-secondary"
              >
                Log out
              </Button>
            </Nav>
          )}
        </NavItem>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
