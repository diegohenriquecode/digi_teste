import { Box, Typography } from "@mui/material"
import { useLanguage } from "../hooks/useLanguage";

export const Footer = () => {
    const { t } = useLanguage(); 
  
  return (
    <Box
    component="footer"
    sx={{
      textAlign: "center",
      padding: "20px",
      marginTop: "20px",
      backgroundColor: "#f1f1f1",
    }}
  >
    <Typography variant="body2" color="textSecondary">
      {t('footer', { year: new Date().getFullYear() })}
    </Typography>
  </Box>
  )
}