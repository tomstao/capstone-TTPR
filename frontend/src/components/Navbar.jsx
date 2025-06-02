import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { AccountCircle } from "@mui/icons-material";
import NavButton from "./NavButton.jsx";

const Search = styled("div")(({ theme }) => ({
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

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(1, 1, 1, 2),
  width: "100%",
}));

const navButtons = [
  { text: "New Arrivals", endpoint: "/new-arrivals" },
  { text: "Exclusive", endpoint: "/exclusive" },
  { text: "Best Sellers", endpoint: "/best-sellers" },
  { text: "Cart", endpoint: "/cart" },
];

function Navbar() {
  // function NavButton({ children, endpoint }) {
  //   const location = useLocation();
  //   const isActive = location.pathname === endpoint;
  //
  //   return (
  //       <Button
  //           color={isActive ? "error" : "inherit"}
  //           component={Link}
  //           to={endpoint}
  //       >
  //         {children}
  //       </Button>
  //   );
  // }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          Figure Shop
        </Typography>

        <Search>
          <SearchInput
            placeholder="Search figures..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box sx={{ flexGrow: 1 }} />

        {/*<Button color="inherit" component={Link} to="/new-arrivals">*/}
        {/*  New Arrivals*/}
        {/*</Button>*/}
        {/*<Button color="inherit" component={Link} to="/exclusive">*/}
        {/*  Exclusive*/}
        {/*</Button>*/}
        {/*<Button color="inherit" component={Link} to="/best-sellers">*/}
        {/*  Best Sellers*/}
        {/*</Button>*/}
        {/*<Button color="inherit" component={Link} to="/cart">*/}
        {/*  Cart*/}
        {/*</Button>*/}
        {navButtons.map(({ text, endpoint }) => (
          <NavButton key={text} children={text} endpoint={endpoint} />
        ))}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 2 }}>
          <AccountCircle sx={{ mr: 1 }} />
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
          <Typography sx={{ color: "rgba(255, 255, 255, 0.7)" }}>|</Typography>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
