import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import Values from "./values/Values";
import User from "../models/User";

const MainPage: React.FC<{ user: User }> = ({
    user
}) =>
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Value</NavLink>
                </Nav>
                <Nav className="ms-auto">
                    <Nav.Link href={`${process.env.REACT_APP_IDENTITY_PROVIDER_URL}/manage/manageaccount`}>{user.name}</Nav.Link>
                    <Nav.Link href={`${process.env.REACT_APP_URL}${user.logoutUrl}`}>Se déconnecter</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <Container className="small">
            <Routes>
                <Route path="/" element={<Values />} />
            </Routes>
        </Container>
    </>;

export default MainPage;