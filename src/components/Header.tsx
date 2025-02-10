import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { AppBar, Badge, IconButton, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from "@mui/material"
import { useLanguage } from "../hooks/useLanguage";
import { useCartStore } from "../store";

export const Header = () => {
    const { cart, toggleCart } = useCartStore();
    const { t, currentLanguage, changeLanguage } = useLanguage(); 
  
    const handleLanguageChange = (event: SelectChangeEvent<string>) => {
      changeLanguage(event.target.value as string); 
    };
  return (
    <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {t('cart')}
          </Typography>
          <Select
            value={currentLanguage} 
            onChange={handleLanguageChange}
            sx={{ color: 'white', marginRight: 2 }}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="pt">Português</MenuItem>
          </Select>
          <IconButton color="inherit" onClick={toggleCart}>
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
  )
}