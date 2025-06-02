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

// This would come from your API in a real application
const plasticModelsData = [
    {
        id: 1,
        title: "MACH SUPERION & Weapon Set",
        image: "https://via.placeholder.com/300x300",
        price: 89.99,
        isNew: true,
        series: "FRAME ARMS",
    },
    {
        id: 2,
        title: "FRAME ARMS GIRL Custom",
        image: "https://via.placeholder.com/300x300",
        price: 159.99,
        isNew: true,
        series: "FRAME ARMS GIRL",
    },
    {
        id: 3,
        title: "VECTOR Frame Type-A",
        image: "https://via.placeholder.com/300x300",
        price: 199.99,
        isNew: false,
        series: "FRAME ARMS",
    },
    {
        id: 4,
        title: "MEGAMI DEVICE Launcher",
        image: "https://via.placeholder.com/300x300",
        price: 129.99,
        isNew: true,
        series: "MEGAMI DEVICE",
    },
    {
        id: 5,
        title: "HEXA GEAR Governor",
        image: "https://via.placeholder.com/300x300",
        price: 179.99,
        isNew: false,
        series: "HEXA GEAR",
    },
    {
        id: 6,
        title: "ARCANADEA Lumitea",
        image: "https://via.placeholder.com/300x300",
        price: 149.99,
        isNew: true,
        series: "ARCANADEA",
    },
];

function PlasticModels() {
    return (
        <Container maxWidth="lg" sx={{py: 8}}>
            <Typography variant="h4" component="h1" gutterBottom sx={{mb: 4}}>
                Plastic Models
            </Typography>

            <Grid container spacing={4}>
                {plasticModelsData.map((product) => (
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
                                <Box sx={{display: "flex", gap: 1, mb: 1, flexWrap: "wrap"}}>
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
                                    <Chip
                                        label={product.series}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            fontSize: "0.75rem",
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

export default PlasticModels;
