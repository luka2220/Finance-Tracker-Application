import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/About">
                        About
                    </NavLink>
                    <NavLink to="/Home">
                        Home
                    </NavLink>
                    <NavLink to="/Investments">
                        Investments
                    </NavLink>
                    <NavLink to="/Savings">
                        Savings
                    </NavLink>
                    <NavLink to="/Analytics">
                        Analytics
                    </NavLink>
                    <NavLink to="/Login">
                        Login
                    </NavLink>
                    <NavLink to="/Signup">
                        Signup
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;