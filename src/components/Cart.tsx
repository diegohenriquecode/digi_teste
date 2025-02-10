import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Product } from "../types";
import { useCartStore } from "../store";
import { useLanguage } from "../hooks/useLanguage";

interface CartProps {
  open: boolean;
  toggleCart: () => void;
}

const Cart: React.FC<CartProps> = ({ open, toggleCart }: CartProps) => {
  const { cart, removeFromCart } = useCartStore();
  const { t } = useLanguage();

  return (
    <Dialog open={open} onClose={toggleCart}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
        {t('modal.title')}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleCart}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {cart.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: 'center', padding: 2 }}>
            {t('modal.emptyCart')}
          </Typography>
        ) : (
          <List>
            {cart.map((item: Product, index: number) => (
              <ListItem key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <ListItemText
                  primary={item.name}
                  secondary={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(item.price))}
                />
                <Button variant="outlined" color="error" onClick={() => removeFromCart(index)}>
                  {t('modal.remove')}
                </Button>
              </ListItem>
            ))}
          </List>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { Cart };