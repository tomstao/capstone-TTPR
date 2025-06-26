import React from "react";
import {Link} from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
    Box,
    Rating,
    Chip,
} from "@mui/material";
import {getBestSellers} from "../data/products";

function BestSellers() {
    // Get products from centralized data source
    const bestSellersData = getBestSellers();

    return (
        <Container maxWidth="lg" sx={{py: 8}}>
            <Typography variant="h4" component="h1" gutterBottom sx={{mb: 4}}>
                Best Sellers
            </Typography>

            <Grid container spacing={4}>
                {bestSellersData.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card
                            component={Link}
                            to={`/product/${product.id}`}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                textDecoration: "none",
                                transition: "transform 0.2s",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                image={product.image}
                                alt={product.title}
                                sx={{objectFit: "cover"}}
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {product.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{fontWeight: "bold", mb: 1}}
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
                                        mb: 1,
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
                                <Chip
                                    label={product.category}
                                    size="small"
                                    variant="outlined"
                                    sx={{
                                        fontSize: "0.7rem",
                                        color: "text.secondary",
                                    }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default BestSellers;
