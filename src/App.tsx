import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import products from "./database/products.json";
import { useCartStore } from "./store";
import { Product } from "./types";
import { useLanguage } from "./hooks/useLanguage";
import { Cart, Footer, Header } from "./components";

const App: React.FC = () => {
  const { addToCart, toggleCart, open } = useCartStore();
  const { t } = useLanguage();

  return (
    <Container>
      <Header />
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card
              sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}
              data-testid="hero-product"
            >
              <CardMedia
                component="img"
                sx={{ width: { xs: '100%', md: '50%' }, height: 'auto' }}
                image={products[0].image}
                alt={products[0].name}
                data-testid="hero-product-image"
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h4" gutterBottom data-testid="hero-product-name">
                  {products[0].name}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph data-testid="hero-product-detail">
                  {products[0].detail}
                </Typography>
                <Typography variant="h4" gutterBottom data-testid="hero-product-price">
                  R$ {products[0].price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(products[0])}
                  data-testid="hero-product-add-to-cart"
                >
                  {t('addToCart')}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {products.slice(1).map((product: Product, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card data-testid={`product-card-${index}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  data-testid={`product-image-${index}`}
                />
                <CardContent>
                  <Typography variant="h6" data-testid={`product-name-${index}`}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" data-testid={`product-detail-${index}`}>
                    {product.detail}
                  </Typography>
                  <Typography variant="h6" data-testid={`product-price-${index}`}>
                    R$ {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addToCart(product)}
                    data-testid={`product-add-to-cart-${index}`}
                  >
                    {t('addToCart')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Cart open={open} toggleCart={toggleCart} />

      <Footer />
    </Container>
  );
};

export default App;