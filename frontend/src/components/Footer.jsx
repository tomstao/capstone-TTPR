import React from "react";
import {Link} from "react-router-dom";
import {MdArrowForward} from "react-icons/md";
import {Icon} from "@iconify/react";

import {
    Container,
    Grid,
    Typography,
    Box,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const paymentMethods = [
    {name: "Amazon", icon: "simple-icons:amazon"},
    {name: "American Express", icon: "simple-icons:americanexpress"},
    {name: "Apple Pay", icon: "simple-icons:applepay"},
    {name: "Diners Club", icon: "simple-icons:dinersclub"},
    {name: "Discover", icon: "simple-icons:discover"},
    {name: "Google Pay", icon: "simple-icons:googlepay"},
    {name: "Mastercard", icon: "simple-icons:mastercard"},
    {name: "PayPal", icon: "simple-icons:paypal"},
    {name: "Shop Pay", icon: "simple-icons:shopify"},
    {name: "Venmo", icon: "simple-icons:venmo"},
    {name: "Visa", icon: "simple-icons:visa"},
];

{
    paymentMethods.map(({name, icon}) => (
        <Icon
            key={name}
            icon={icon}
            // sx = {{fontSize: 50}}
            title={name}
        />))
}

function Footer() {
    return (
        <Box sx={{bgcolor: "#f5f5f5", pt: 8, pb: 4}}>
            <Container>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        mb: 8,
                        textAlign: "center",
                        justifyContent: "center",
                        "& .MuiGrid-item": {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        },
                    }}
                >
                    {/* Logo and Social Links */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 3,
                                mb: {xs: 4, md: 0},
                                width: "100%",
                                maxWidth: "200px",
                            }}
                        >
                            <Box
                                component={Link}
                                to="/"
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <img
                                    src="/logo.png"
                                    alt="KOTOBUKIYA US ONLINE"
                                    style={{height: "40px", width: "auto"}}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 3,
                                    justifyContent: "center",
                                }}
                            >
                                <IconButton
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{
                                        color: "black",
                                        "&:hover": {
                                            color: "primary.main",
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <InstagramIcon/>
                                </IconButton>
                                <IconButton
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{
                                        color: "black",
                                        "&:hover": {
                                            color: "primary.main",
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <FacebookIcon/>
                                </IconButton>
                                <IconButton
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener"
                                    sx={{
                                        color: "black",
                                        "&:hover": {
                                            color: "primary.main",
                                            transform: "translateY(-2px)",
                                        },
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <TwitterIcon/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Terms */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{width: "100%", maxWidth: "200px"}}>
                            <Typography variant="h6" gutterBottom>
                                Terms
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 1,
                                    "& a": {
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                        "&:hover": {
                                            color: "primary.main",
                                            transform: "translateY(-2px)",
                                        },
                                    },
                                }}
                            >
                                <Link to="/terms">Website Terms of Use</Link>
                                <Link to="/membership">Terms of Membership</Link>
                                <Link to="/purchase">Terms of Purchase of products</Link>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Guide */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{width: "100%", maxWidth: "200px"}}>
                            <Typography variant="h6" gutterBottom>
                                Guide
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 1,
                                    "& a": {
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                        "&:hover": {
                                            color: "primary.main",
                                            transform: "translateY(-2px)",
                                        },
                                    },
                                }}
                            >
                                <Link to="/guide">User's Guide</Link>
                                <Link to="/faq">FAQ</Link>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Company Profile */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{width: "100%", maxWidth: "200px"}}>
                            <Typography variant="h6" gutterBottom>
                                Company Profile
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: 1,
                                    "& a": {
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                        "&:hover": {
                                            color: "primary.main",
                                            transform: "translateY(-2px)",
                                        },
                                    },
                                }}
                            >
                                <Link to="/about">About Us</Link>
                                <Link to="/contact">Contact Us</Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Newsletter Signup */}
                <Box sx={{mb: 8, textAlign: "center", maxWidth: "600px", mx: "auto"}}>
                    <Typography variant="h6" gutterBottom>
                        Sign up to our newsletter
                    </Typography>
                    <Typography variant="body2" sx={{mb: 2}}>
                        With our newsletters, you can get the latest in KOTOBUKIYA news and
                        updates on new products, campaigns, and recommended items right to
                        your inbox.
                    </Typography>
                    <Box sx={{display: "flex", gap: 1, maxWidth: "400px", mx: "auto"}}>
                        <TextField
                            placeholder="Your email"
                            variant="outlined"
                            fullWidth
                            sx={{
                                bgcolor: "white",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "50px",
                                },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "50px",
                                px: 3,
                                bgcolor: "black",
                                color: "white",
                                "&:hover": {
                                    bgcolor: "rgba(0, 0, 0, 0.8)",
                                },
                            }}
                        >
                            <MdArrowForward size={24}/>
                        </Button>
                    </Box>
                </Box>

                {/* Payment Methods */}
                <Box
                    sx={{
                        fontSize: "1.8rem",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 3,
                        mb: 4,
                        "& img": {
                            height: "20px",
                            transition: "transform 0.2s",
                            "&:hover": {
                                transform: "translateY(-2px)",
                            },
                        },
                    }}
                >
                    {paymentMethods.map((method) => (
                        <Icon key={method.name} icon={method.icon} title={method.name}/>
                    ))}
                </Box>

                {/* Bottom Links */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 3,
                        mb: 2,
                        fontSize: "0.875rem",
                        "& a": {
                            color: "inherit",
                            textDecoration: "none",
                            transition: "color 0.2s",
                            "&:hover": {
                                color: "primary.main",
                            },
                        },
                    }}
                >
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/shipping">Shipping Policy</Link>
                    <Link to="/returns">Return/Refund Policy</Link>
                    <Link to="/accessibility">Accessibility Options</Link>
                    <Link to="/cookie">Cookie Preferences</Link>
                    <Link to="/privacy/ccpa">Do Not Sell My Personal Information</Link>
                </Box>

                {/* Copyright */}
                <Typography
                    variant="body2"
                    align="center"
                    sx={{color: "text.secondary"}}
                >
                    © KOTOBUKIYA
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
