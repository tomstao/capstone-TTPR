import React from "react";
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Button,
    Box,
    Badge,
    IconButton,
} from "@mui/material";
import {styled} from "@mui/material/styles";
import {AccountCircle} from "@mui/icons-material";
import NavButton from "./NavButton.jsx";
import Cart from "./Cart.jsx";
import {useAuth} from "../context/AuthContext.jsx";
import {useCart} from "../context/CartContext.jsx";

const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchInput = styled(InputBase)(({theme}) => ({
    color: "inherit",
    padding: theme.spacing(1, 1, 1, 2),
    width: "100%",
}));

const navButtons = [
    {text: "New Arrivals", endpoint: "/new-arrivals"},
    {text: "Exclusive", endpoint: "/exclusive"},
    {text: "Best Sellers", endpoint: "/best-sellers"},
];

function Navbar() {
    const {isLoggedIn, logout} = useAuth();
    const {getTotalItems, isCartOpen, toggleCart} = useCart();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{textDecoration: "none", color: "inherit"}}
                    >
                        Figure Shop
                    </Typography>

                    <Search>
                        <SearchInput
                            placeholder="Search figures..."
                            inputProps={{"aria-label": "search"}}
                        />
                    </Search>

                    <Box sx={{flexGrow: 1}}/>

                    {navButtons.map(({text, endpoint}) => (
                        <NavButton key={text} children={text} endpoint={endpoint}/>
                    ))}

                    {/* Cart Icon with Badge */}
                    <IconButton
                        color="inherit"
                        onClick={toggleCart}
                        sx={{
                            ml: 1,
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                            },
                        }}
                    >
                        <Badge badgeContent={getTotalItems()} color="error">
                            <ShoppingCartIcon/>
                        </Badge>
                    </IconButton>

                    <Box sx={{display: "flex", alignItems: "center", gap: 1, ml: 2}}>
                        {isLoggedIn ? (
                            <>
                                <AccountCircle sx={{mr: 1}}/>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/login"
                                    onClick={logout}
                                    sx={{
                                        fontSize: "0.875rem",
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        },
                                    }}
                                >
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/login"
                                    sx={{
                                        fontSize: "0.875rem",
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        },
                                    }}
                                >
                                    Login
                                </Button>
                                <Typography sx={{color: "rgba(255, 255, 255, 0.7)"}}>
                                    |
                                </Typography>
                                <Button
                                    color="inherit"
                                    component={Link}
                                    to="/register"
                                    sx={{
                                        fontSize: "0.875rem",
                                        textTransform: "none",
                                        "&:hover": {
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        },
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Cart Drawer */}
            <Cart open={isCartOpen} onClose={toggleCart}/>
        </>
    );
}

export default Navbar;
