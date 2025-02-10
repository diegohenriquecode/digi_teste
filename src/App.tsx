
import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box} from "@mui/material";
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
          {/* Hero Product */}
          <Grid item xs={12}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
              <CardMedia
                component="img"
                sx={{ width: { xs: '100%', md: '50%' }, height: 'auto' }}
                image={products[0].image}
                alt={products[0].name}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h4" gutterBottom>
                  {products[0].name}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {products[0].detail}
                </Typography>
                <Typography variant="h4" gutterBottom>
                  R$ {products[0].price}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => addToCart(products[0])}>
                  {t('addToCart')}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {products.slice(1).map((product: Product, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.detail}
                  </Typography>
                  <Typography variant="h6">R$ {product.price}</Typography>
                  <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
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