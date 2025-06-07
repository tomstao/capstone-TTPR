import React from "react";
import {useParams, useNavigate} from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    Button,
    Box,
    Paper,
    Chip,
} from "@mui/material";
import {useCart} from "../context/CartContext";
import {getProductById} from "../data/products";

function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {addToCart} = useCart();

    // Get product from centralized data source
    const product = getProductById(id);

    // Handle case where product is not found
    if (!product) {
        return (
            <Container sx={{py: 4}}>
                <Typography variant="h4" align="center">
                    Product not found
                </Typography>
                <Typography variant="body1" align="center" sx={{mt: 2}}>
                    The product you're looking for doesn't exist.
                </Typography>
            </Container>
        );
    }

    const handleAddToCart = () => {
        addToCart(product, 1);
        // You can add a toast notification here later
        alert(`${product.title} added to cart!`);
    };

    const handleBuyNow = () => {
        addToCart(product, 1);
        navigate("/checkout");
    };

    return (
        <Container sx={{py: 4}}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3}>
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{width: "100%", height: "auto"}}
                        />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box sx={{display: "flex", gap: 1, mb: 2}}>
                        <Chip label={product.category} color="primary" variant="outlined"/>
                        {product.isNew && (
                            <Chip
                                label="New"
                                sx={{
                                    backgroundColor: "primary.main",
                                    color: "white",
                                }}
                            />
                        )}
                        {product.isExclusive && (
                            <Chip
                                label="Exclusive"
                                sx={{
                                    backgroundColor: "#ff4081",
                                    color: "white",
                                }}
                            />
                        )}
                        {product.hasBonus && (
                            <Chip
                                label="Bonus Item"
                                sx={{
                                    backgroundColor: "#ffd700",
                                    color: "black",
                                }}
                            />
                        )}
                    </Box>

                    <Typography variant="h4" gutterBottom>
                        {product.title}
                    </Typography>

                    <Typography variant="h5" color="primary" gutterBottom>
                        ${product.price}
                    </Typography>

                    <Typography variant="body1" paragraph sx={{mt: 3}}>
                        {product.description}
                    </Typography>

                    {product.series && (
                        <Box sx={{my: 2}}>
                            <Typography variant="h6" gutterBottom>
                                Series: {product.series}
                            </Typography>
                        </Box>
                    )}

                    {product.rating && (
                        <Box sx={{my: 2}}>
                            <Typography variant="body1">
                                Rating: {product.rating}/5 ({product.reviews} reviews)
                            </Typography>
                            {product.soldCount && (
                                <Typography variant="body2" color="text.secondary">
                                    {product.soldCount}+ sold
                                </Typography>
                            )}
                        </Box>
                    )}

                    <Box sx={{display: "flex", gap: 2, mt: 3}}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleAddToCart}
                            sx={{flex: 1}}
                        >
                            Add to Cart
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={handleBuyNow}
                            sx={{flex: 1}}
                        >
                            Buy Now
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductDetails;
