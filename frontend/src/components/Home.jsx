import React from "react";
// import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
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

const featuredProducts = [
  {
    id: 1,
    title: "Limited Edition Mecha",
    image: "https://via.placeholder.com/800x400",
    price: 199.99,
  },
  {
    id: 2,
    title: "Exclusive Figure Set",
    image: "https://via.placeholder.com/800x400",
    price: 299.99,
  },
  {
    id: 3,
    title: "Special Edition Collection",
    image: "https://via.placeholder.com/800x400",
    price: 399.99,
  },
];

const newArrivals = [
  {
    id: 4,
    title: "New Mecha Model",
    image: "https://via.placeholder.com/300x300",
    price: 79.99,
  },
  {
    id: 5,
    title: "Limited Figure",
    image: "https://via.placeholder.com/300x300",
    price: 89.99,
  },
  {
    id: 6,
    title: "Collector's Edition",
    image: "https://via.placeholder.com/300x300",
    price: 129.99,
  },
  {
    id: 7,
    title: "Special Release",
    image: "https://via.placeholder.com/300x300",
    price: 149.99,
  },
];

const exclusiveItems = [
  {
    id: 8,
    title: "Exclusive ARPEGGIO II",
    image: "https://via.placeholder.com/300x300",
    price: 279.99,
    bonus: "Includes Special Stand",
  },
  {
    id: 9,
    title: "Limited VECTOR Frame",
    image: "https://via.placeholder.com/300x300",
    price: 189.99,
    bonus: "Free Poster",
  },
  {
    id: 10,
    title: "Collector's MECHA-X",
    image: "https://via.placeholder.com/300x300",
    price: 329.99,
    bonus: "Exclusive Art Book",
  },
  {
    id: 11,
    title: "Special FRAME ARMS Set",
    image: "https://via.placeholder.com/300x300",
    price: 259.99,
    bonus: "Limited Edition Box",
  },
];

const bestSellers = [
  {
    id: 12,
    title: "VECTOR Frame Type-A",
    image: "https://via.placeholder.com/300x300",
    price: 199.99,
    rating: 4.8,
    reviews: 256,
    soldCount: 1200,
  },
  {
    id: 13,
    title: "ARPEGGIO Limited Ver.",
    image: "https://via.placeholder.com/300x300",
    price: 299.99,
    rating: 4.9,
    reviews: 189,
    soldCount: 950,
  },
  {
    id: 14,
    title: "FRAME ARMS GIRL Custom",
    image: "https://via.placeholder.com/300x300",
    price: 159.99,
    rating: 4.7,
    reviews: 312,
    soldCount: 1500,
  },
  {
    id: 15,
    title: "Mecha Strike Series 2",
    image: "https://via.placeholder.com/300x300",
    price: 249.99,
    rating: 4.9,
    reviews: 423,
    soldCount: 2000,
  },
];

const series = [
  {
    id: 1,
    name: "BISHOUJO series",
    image: "/series-logos/bishoujo.png",
    link: "/series/bishoujo",
  },
  {
    id: 2,
    name: "ZOIDS",
    image: "/series-logos/zoids.png",
    link: "/series/zoids",
  },
  {
    id: 3,
    name: "ARTFX J",
    image: "/series-logos/artfx-j.png",
    link: "/series/artfx-j",
  },
  {
    id: 4,
    name: "ARCANADEA",
    image: "/series-logos/arcanadea.png",
    link: "/series/arcanadea",
  },
  {
    id: 5,
    name: "MEGAMI DEVICE",
    image: "/series-logos/megami-device.png",
    link: "/series/megami-device",
  },
  {
    id: 6,
    name: "FRAME ARMS GIRL",
    image: "/series-logos/frame-arms-girl.png",
    link: "/series/frame-arms-girl",
  },
  {
    id: 7,
    name: "SOUSAI SHOJO TEIEN",
    image: "/series-logos/sousai-shojo-teien.png",
    link: "/series/sousai-shojo-teien",
  },
  {
    id: 8,
    name: "M.S.G",
    image: "/series-logos/msg.png",
    link: "/series/msg",
  },
  {
    id: 9,
    name: "HEXA GEAR",
    image: "/series-logos/hexa-gear.png",
    link: "/series/hexa-gear",
  },
];

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container maxWidth="lg" sx={{ width: "100%" }}>
      <Box sx={{ my: 4, width: "100%" }}>
        <Slider {...sliderSettings}>
          {featuredProducts.map((product) => (
            <div key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h5">{product.title}</Typography>
                  <Typography variant="h6">${product.price}</Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </Box>

      <Box sx={{ textAlign: "center", width: "100%" }}>
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
            <span style={{ fontSize: "1.2em" }}>→</span>
          </Button>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {newArrivals.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                component={Link}
                to={`/product/${product.id}`}
                sx={{ textDecoration: "none" }}
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
            <span style={{ fontSize: "1.2em" }}>→</span>
          </Button>
        </Box>
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {exclusiveItems.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                component={Link}
                to={`/product/${product.id}`}
                sx={{ textDecoration: "none" }}
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
                    🎁 {product.bonus}
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
            <span style={{ fontSize: "1.2em" }}>→</span>
          </Button>
        </Box>
        <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
          {bestSellers.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card
                component={Link}
                to={`/product/${product.id}`}
                sx={{ textDecoration: "none" }}
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
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Rating
                      value={product.rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
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
            <span style={{ fontSize: "1.2em" }}>→</span>
          </Button>
        </Box>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
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
