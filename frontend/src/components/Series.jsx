import React from "react";
import {Link} from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import {allSeries} from "../data/products";

function Series() {
    // Get series data from centralized data source
    const seriesData = allSeries;

    return (
        <Container maxWidth="lg" sx={{py: 8}}>
            <Typography variant="h4" component="h1" gutterBottom sx={{mb: 4}}>
                Series
            </Typography>

            <Grid container spacing={4}>
                {seriesData.map((series) => (
                    <Grid item xs={12} sm={6} md={4} key={series.id}>
                        <Card
                            component={Link}
                            to={series.link}
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                textDecoration: "none",
                                transition: "transform 0.2s",
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    "& .MuiCardMedia-root": {
                                        filter: "brightness(1.1)",
                                    },
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={series.image}
                                alt={series.name}
                                sx={{
                                    objectFit: "contain",
                                    padding: "20px",
                                    backgroundColor: "#f5f5f5",
                                    transition: "filter 0.2s",
                                }}
                            />
                            <CardContent sx={{flexGrow: 1}}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 2,
                                    }}
                                >
                                    {series.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {series.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Series;
