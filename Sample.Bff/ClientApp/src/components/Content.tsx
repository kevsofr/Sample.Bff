import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import Values from "./values/Values";
import User from "../models/User";

const Content: React.FC<{ user: User }> = ({
    user
}) =>
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Value</NavLink>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href={`${import.meta.env.VITE_REACT_APP_IDENTITY_PROVIDER_URL}/diagnostics`}>{user.name}</Nav.Link>
                    <Nav.Link href={`${import.meta.env.VITE_REACT_APP_URL}${user.logoutUrl}`}>Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Container className="small">
            <Routes>
                <Route path="/" element={<Values />} />
            </Routes>
        </Container>
    </>;

export default Content;