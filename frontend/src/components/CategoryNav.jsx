import React, {useState, useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import {
    Box,
    Container,
    Button,
    // Popper,
    Paper,
    Grid,
    Typography,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
    getNewArrivals,
    getPlasticModels,
    getExclusiveItems,
    allSeries,
} from "../data/products";

// Sample data - in a real app, this would come from your API
const categoryData = {
    figures: getNewArrivals(3), // Get first 3 new arrivals for figures dropdown
    plasticModels: getPlasticModels(3), // Get first 3 plastic models
    exclusive: getExclusiveItems(3), // Get first 3 exclusive items
    series: allSeries.slice(0, 3), // Get first 3 series
};

function CategoryNav() {
    const [anchorEls, setAnchorEls] = useState({
        figures: null,
        plasticModels: null,
        exclusive: null,
        series: null,
    });

    const timeoutRefs = useRef({});

    useEffect(() => {
        // Cleanup timeouts on unmount
        return () => {
            Object.values(timeoutRefs.current).forEach((timeout) =>
                clearTimeout(timeout)
            );
        };
    }, []);

    const handleMouseEnter = (event, category) => {
        // Clear any existing timeout for this category
        if (timeoutRefs.current[category]) {
            clearTimeout(timeoutRefs.current[category]);
        }

        setAnchorEls((prev) => ({...prev, [category]: event.currentTarget}));
    };

    const handleMouseLeave = (category) => {
        // Set a timeout before closing the dropdown
        timeoutRefs.current[category] = setTimeout(() => {
            setAnchorEls((prev) => ({...prev, [category]: null}));
        }, 150); // 150ms delay before closing
    };

    const renderDropdownContent = (category, items) => {
        const isProduct = category !== "series";
        // Show only first 4 items
        const displayItems = items.slice(0, 4);

        return (
            <Grid container spacing={2} sx={{p: 2, width: "600px"}}>
                {displayItems.map((item) => (
                    <Grid item xs={6} key={item.id}>
                        <Card
                            component={Link}
                            to={isProduct ? `/product/${item.id}` : item.link}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                height: "100%",
                                textDecoration: "none",
                                transition: "transform 0.2s",
                                "&:hover": {
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height={isProduct ? "120" : "60"}
                                image={item.image}
                                alt={isProduct ? item.title : item.name}
                                sx={{
                                    objectFit: isProduct ? "cover" : "contain",
                                    padding: isProduct ? 0 : "8px",
                                }}
                            />
                            <CardContent sx={{flexGrow: 1, p: 1.5}}>
                                <Typography
                                    variant="body2"
                                    component="div"
                                    sx={{
                                        fontWeight: 500,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    {isProduct ? item.title : item.name}
                                </Typography>
                                {isProduct && (
                                    <Typography
                                        variant="body2"
                                        color="primary"
                                        sx={{fontWeight: "bold", mt: 0.5}}
                                    >
                                        ${item.price}
                                    </Typography>
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 1}}>
                        <Button
                            component={Link}
                            to={`/${
                                category === "figures"
                                    ? "new-arrivals"
                                    : category === "plasticModels"
                                        ? "plastic-models"
                                        : category
                            }`}
                            variant="outlined"
                            size="small"
                            sx={{
                                color: "primary.main",
                                borderColor: "primary.main",
                                "&:hover": {
                                    bgcolor: "primary.main",
                                    color: "white",
                                },
                            }}
                        >
                            View All{" "}
                            {category === "figures"
                                ? "Figures"
                                : category === "plasticModels"
                                    ? "Plastic Models"
                                    : category.charAt(0).toUpperCase() + category.slice(1)}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        );
    };

    return (
        <Box
            sx={{
                borderBottom: 1,
                borderColor: "divider",
                bgcolor: "background.paper",
                position: "relative",
                zIndex: 1100,
                height: "56px", // Fixed height to prevent layout shifts
                overflow: "visible", // Ensure dropdowns can extend beyond container
            }}
        >
            <Container maxWidth="lg" sx={{position: "relative"}}>
                <Box
                    sx={{
                        display: "flex",
                        gap: 4,
                        py: 1,
                        height: "56px", // Match parent height
                        alignItems: "center", // Center buttons vertically
                    }}
                >
                    {[
                        {key: "figures", label: "Figures", route: "/new-arrivals"},
                        {
                            key: "plasticModels",
                            label: "Plastic Models",
                            route: "/plastic-models",
                        },
                        {
                            key: "exclusive",
                            label: "Exclusive & Bonus Items",
                            route: "/exclusive",
                        },
                        {key: "series", label: "Series", route: "/series"},
                    ].map(({key, label, route}) => (
                        <Box
                            key={key}
                            onMouseEnter={(e) => handleMouseEnter(e, key)}
                            onMouseLeave={() => handleMouseLeave(key)}
                            sx={{
                                position: "relative",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Button
                                component={Link}
                                to={route}
                                sx={{
                                    color: "text.primary",
                                    "&:hover": {color: "primary.main"},
                                    transition: "color 0.2s ease",
                                    textDecoration: "none",
                                    height: "fit-content",
                                    minHeight: "36px", // Consistent button height
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                endIcon={<KeyboardArrowDownIcon/>}
                            >
                                {label}
                            </Button>

                            {/* Dropdown positioned absolutely to avoid any layout impact */}
                            {anchorEls[key] && (
                                <Box
                                    onMouseEnter={() => {
                                        if (timeoutRefs.current[key]) {
                                            clearTimeout(timeoutRefs.current[key]);
                                        }
                                    }}
                                    onMouseLeave={() => handleMouseLeave(key)}
                                    sx={{
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        zIndex: 1300,
                                        mt: 1,
                                        // Ensure this doesn't affect any layout
                                        pointerEvents: "auto",
                                    }}
                                >
                                    <Paper
                                        elevation={8}
                                        sx={{
                                            overflow: "hidden",
                                            borderRadius: 2,
                                            border: "1px solid",
                                            borderColor: "divider",
                                            // Ensure no layout impact
                                            position: "relative",
                                            transform: "translateZ(0)", // Force hardware acceleration
                                        }}
                                    >
                                        {renderDropdownContent(key, categoryData[key])}
                                    </Paper>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default CategoryNav;
