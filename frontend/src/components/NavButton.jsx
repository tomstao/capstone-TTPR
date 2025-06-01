import {Link, useLocation} from "react-router-dom";
import {Button} from "@mui/material";
import React from "react";

function NavButton({ children, endpoint }) {
    const location = useLocation();
    const isActive = location.pathname === endpoint;

    return (
        <Button
            color={isActive ? "error" : "inherit"}
            component={Link}
            to={endpoint}
        >
            {children}
        </Button>
    );
}

export default NavButton;