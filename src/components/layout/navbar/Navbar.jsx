import { Box } from "@mui/material";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box>
      <nav>
        <h1>valeria</h1>
        <button>home</button>
        <button>catalog</button>
        <button>top</button>
        <button>bottom</button>
        <button>lookbook</button>
        <CartWidget />
      </nav>
    </Box>
  );
};

export default Navbar;
