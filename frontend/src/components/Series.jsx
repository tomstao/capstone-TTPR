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

// This would come from your API in a real application
const seriesData = [
    {
        id: 1,
        name: "BISHOUJO series",
        image: "/series-logos/bishoujo.png",
        link: "/series/bishoujo",
        description:
            "Beautiful girl statues based on illustrations by Shunya Yamashita",
    },
    {
        id: 2,
        name: "ZOIDS",
        image: "/series-logos/zoids.png",
        link: "/series/zoids",
        description:
            "Mechanical animal-shaped model kits from the popular franchise",
    },
    {
        id: 3,
        name: "ARTFX J",
        image: "/series-logos/artfx-j.png",
        link: "/series/artfx-j",
        description: "High-quality scale figures from Japanese anime and games",
    },
    {
        id: 4,
        name: "ARCANADEA",
        image: "/series-logos/arcanadea.png",
        link: "/series/arcanadea",
        description: "Original mecha model kit series with unique designs",
    },
    {
        id: 5,
        name: "MEGAMI DEVICE",
        image: "/series-logos/megami-device.png",
        link: "/series/megami-device",
        description: "Customizable female robot model kit series",
    },
    {
        id: 6,
        name: "FRAME ARMS GIRL",
        image: "/series-logos/frame-arms-girl.png",
        link: "/series/frame-arms-girl",
        description: "Anthropomorphized versions of Frame Arms mecha",
    },
    {
        id: 7,
        name: "SOUSAI SHOJO TEIEN",
        image: "/series-logos/sousai-shojo-teien.png",
        link: "/series/sousai-shojo-teien",
        description: "Customizable school girl model kit series",
    },
    {
        id: 8,
        name: "M.S.G",
        image: "/series-logos/msg.png",
        link: "/series/msg",
        description: "Modeling Support Goods - weapon and armor add-on parts",
    },
    {
        id: 9,
        name: "HEXA GEAR",
        image: "/series-logos/hexa-gear.png",
        link: "/series/hexa-gear",
        description:
            "Original mechanical model kit series with unique hex-based designs",
    },
];

function Series() {
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
