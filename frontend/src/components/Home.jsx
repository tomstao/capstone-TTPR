import React from "react";
// import { MdArrowForward } from "react-icons/md";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    Rating,
    Chip,
    Button,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    getFeaturedProducts,
    getNewArrivals,
    getExclusiveItems,
    getBestSellers,
    allSeries,
} from "../data/products";

function Home() {
    // Get data from centralized data source
    const featuredProducts = getFeaturedProducts();
    const newArrivals = getNewArrivals(4); // Limit to 4 for home page
    const exclusiveItems = getExclusiveItems(4); // Limit to 4 for home page
    const bestSellers = getBestSellers(4); // Limit to 4 for home page
    const series = allSeries.slice(0, 9); // Show first 9 series

    // Debug: Check if featured products are loaded
    console.log("Featured Products:", featuredProducts);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <Container maxWidth="lg" sx={{width: "100%"}}>
            {/* Featured Products Carousel */}
            {featuredProducts && featuredProducts.length > 0 ? (
                <Box sx={{my: 4, width: "100%"}}>
                    <Slider {...sliderSettings}>
                        {featuredProducts.map((product) => (
                            <div key={product.id}>
                                <Card
                                    className="carousel-card"
                                    component={Link}
                                    to={`/product/${product.id}`}
                                    sx={{
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        transition: "transform 0.2s",
                                        "&:hover": {
                                            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={product.image}
                                        alt={product.title}
                                    />
                                    <CardContent>
                                        <Typography variant="h5" color="text.primary">
                                            {product.title}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            color="primary"
                                            sx={{fontWeight: "bold"}}
                                        >
                                            ${product.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </Box>
            ) : (
                <Box sx={{my: 4, width: "100%", textAlign: "center", py: 8}}>
                    <Typography variant="h6" color="text.secondary">
                        No featured products available at the moment.
                    </Typography>
                </Box>
            )}

            <Box sx={{textAlign: "center", width: "100%"}}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 4,
                    }}
                >
                    <Typography variant="h4">New Arrivals</Typography>
                    <Button
                        component={Link}
                        to="/new-arrivals"
                        sx={{
                            color: "text.secondary",
                            "&:hover": {
                                color: "primary.main",
                            },
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        View All
                        <span style={{fontSize: "1.2em"}}>→</span>
                    </Button>
                </Box>
                <Grid container spacing={4} justifyContent="center">
                    {newArrivals.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product.id}>
                            <Card
                                component={Link}
                                to={`/product/${product.id}`}
                                sx={{textDecoration: "none"}}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={product.image}
                                    alt={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        ${product.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 4,
                        mt: 8,
                    }}
                >
                    <Typography variant="h4">Exclusive & Bonus Items</Typography>
                    <Button
                        component={Link}
                        to="/exclusive"
                        sx={{
                            color: "text.secondary",
                            "&:hover": {
                                color: "primary.main",
                            },
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        View All
                        <span style={{fontSize: "1.2em"}}>→</span>
                    </Button>
                </Box>
                <Grid container spacing={4} justifyContent="center" sx={{mb: 4}}>
                    {exclusiveItems.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product.id}>
                            <Card
                                component={Link}
                                to={`/product/${product.id}`}
                                sx={{textDecoration: "none"}}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={product.image}
                                    alt={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        ${product.price}
                                    </Typography>
                                    {product.hasBonus && (
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "primary.main",
                                                fontWeight: "bold",
                                                mt: 1,
                                                backgroundColor: "rgba(76, 175, 80, 0.1)",
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                                display: "inline-block",
                                            }}
                                        >
                                            🎁 Bonus Item Included
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 4,
                        mt: 8,
                    }}
                >
                    <Typography variant="h4">Best Sellers</Typography>
                    <Button
                        component={Link}
                        to="/best-sellers"
                        sx={{
                            color: "text.secondary",
                            "&:hover": {
                                color: "primary.main",
                            },
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        View All
                        <span style={{fontSize: "1.2em"}}>→</span>
                    </Button>
                </Box>
                <Grid container spacing={4} justifyContent="center" sx={{mb: 4}}>
                    {bestSellers.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product.id}>
                            <Card
                                component={Link}
                                to={`/product/${product.id}`}
                                sx={{textDecoration: "none"}}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={product.image}
                                    alt={product.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        ${product.price}
                                    </Typography>
                                    <Box sx={{display: "flex", alignItems: "center", mb: 1}}>
                                        <Rating
                                            value={product.rating}
                                            precision={0.1}
                                            readOnly
                                            size="small"
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ml: 1}}
                                        >
                                            ({product.rating})
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography variant="body2" color="text.secondary">
                                            {product.reviews} reviews
                                        </Typography>
                                        <Chip
                                            label={`${product.soldCount}+ sold`}
                                            size="small"
                                            color="primary"
                                            sx={{
                                                backgroundColor: "rgba(76, 175, 80, 0.1)",
                                                color: "primary.main",
                                                fontWeight: "bold",
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        mb: 4,
                        mt: 8,
                        position: "relative",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: "-10px",
                            left: "0",
                            width: "60px",
                            height: "2px",
                            backgroundColor: "#4CAF50",
                        },
                    }}
                >
                    <Typography variant="h4">Series</Typography>
                    <Button
                        component={Link}
                        to="/series"
                        sx={{
                            color: "text.secondary",
                            "&:hover": {
                                color: "primary.main",
                            },
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        View All
                        <span style={{fontSize: "1.2em"}}>→</span>
                    </Button>
                </Box>

                <Grid container spacing={4} justifyContent="center" sx={{mb: 8}}>
                    {series.map((item) => (
                        <Grid item xs={6} sm={4} md={2.4} key={item.id}>
                            <Card
                                component={Link}
                                to={item.link}
                                sx={{
                                    textDecoration: "none",
                                    boxShadow: "none",
                                    backgroundColor: "transparent",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        "& .MuiCardMedia-root": {
                                            filter: "brightness(1.1)",
                                        },
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.name}
                                    sx={{
                                        height: "80px",
                                        objectFit: "contain",
                                        padding: "10px",
                                        transition: "all 0.3s ease",
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        padding: "8px",
                                        textAlign: "center",
                                        "&:last-child": {
                                            paddingBottom: "8px",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontSize: "0.875rem",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Home;
