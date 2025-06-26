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
    Chip,
} from "@mui/material";
import {getNewArrivals} from "../data/products";

function NewArrivals() {
    // Get products from centralized data source
    const newArrivalsData = getNewArrivals();

    return (
        <Container maxWidth="lg" sx={{py: 8}}>
            <Typography variant="h4" component="h1" gutterBottom sx={{mb: 4}}>
                New Arrivals
            </Typography>

            <Grid container spacing={4}>
                {newArrivalsData.map((product) => (
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
                                <Box sx={{display: "flex", gap: 1, mb: 1}}>
                                    {product.isNew && (
                                        <Chip
                                            label="New"
                                            size="small"
                                            sx={{
                                                backgroundColor: "primary.main",
                                                color: "white",
                                            }}
                                        />
                                    )}
                                    {product.hasBonus && (
                                        <Chip
                                            label="Bonus Item"
                                            size="small"
                                            sx={{
                                                backgroundColor: "#ffd700",
                                                color: "black",
                                            }}
                                        />
                                    )}
                                    <Chip
                                        label={product.category}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            fontSize: "0.7rem",
                                            color: "text.secondary",
                                        }}
                                    />
                                </Box>
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
                                    sx={{fontWeight: "bold"}}
                                >
                                    ${product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default NewArrivals;
