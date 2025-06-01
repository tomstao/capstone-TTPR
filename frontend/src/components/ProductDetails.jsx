import React from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Button, Box, Paper } from "@mui/material";

// Mock product data - in a real app, this would come from an API
const mockProduct = {
  id: 1,
  title: "Limited Edition Mecha",
  price: 199.99,
  description:
    "High-quality limited edition mecha figure with exceptional detail and articulation. Perfect for collectors and enthusiasts.",
  image: "https://via.placeholder.com/600x600",
  specifications: [
    "Height: 30cm",
    "Material: PVC & ABS",
    "Weight: 800g",
    "Release Date: 2024",
    "Manufacturer: Top Figure Makers",
  ],
};

function ProductDetails() {
  const { id } = useParams();

  // In a real app, you would fetch the product data based on the ID
  const product = mockProduct;

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>

          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="h6" gutterBottom>
              Specifications:
            </Typography>
            {product.specifications.map((spec, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 1 }}>
                • {spec}
              </Typography>
            ))}
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
            onClick={() => alert("Added to cart!")}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetails;
