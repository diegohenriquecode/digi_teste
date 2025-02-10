import React from "react";
import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Product } from "../types";
import { useCartStore } from "../store";
import { useLanguage } from "../hooks/useLanguage";

interface CartProps {
  open: boolean;
  toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ open, toggleCart }) => {
  const { cart, removeFromCart } = useCartStore();
  const { t } = useLanguage();

  return (
    <Dialog open={open} onClose={toggleCart} data-testid="cart-modal">
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }} data-testid="cart-title">
        {t('modal.title')}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleCart}
          aria-label="close"
          data-testid="close-cart-button"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <List>
          {cart.map((item: Product, index: number) => (
            <ListItem
              key={index}
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
              data-testid={`cart-item-${index}`}
            >
              <ListItemText
                primary={item.name}
                secondary={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(item.price))}
                data-testid={`cart-item-name-${index}`}
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => removeFromCart(index)}
                data-testid={`remove-item-${index}`}
              >
                {t('modal.remove')}
              </Button>
            </ListItem>
          ))}
        </List>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center', marginTop: 2 }}
          data-testid="cart-total-items"
        >
          Total de itens: {cart.length}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export { Cart };