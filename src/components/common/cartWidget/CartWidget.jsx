import "./CartWidget.css";
import { Box, Badge } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const CartWidget = () => {
  return (
    <Box className="cartWidget">
      <SearchIcon fontSize="medium" />
      <FavoriteBorderOutlinedIcon fontSize="medium" />
      <Badge badgeContent={1} color="error">
        <ShoppingBasketOutlinedIcon fontSize="medium" />
      </Badge>
    </Box>
  );
};

export default CartWidget;
