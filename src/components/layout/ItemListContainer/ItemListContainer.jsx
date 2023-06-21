import { Box } from "@mui/material";
import "./ItemListContainer.css";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  return (
    <Box className="about">
      <img
        className="aboutImg"
        src="https://res.cloudinary.com/dqrgdohtt/image/upload/v1687375243/about_xiotem.png"
        alt="about"
      />
      <div>
        <h2 className="aboutTitle">{greeting}</h2>
        <p className="aboutTxt">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          architecto magnam ullam aut assumenda laboriosam est cumque, maiores
          ad tenetur iure deserunt, quidem nihil! Iure facilis saepe ea cum
          minus, aliquam laudantium eligendi id temporibus. Laborum molestias
          ipsam fugit laboriosam reprehenderit id eius. Quaerat animi laboriosam
          earum aliquam similique ipsa.
        </p>
      </div>
    </Box>
  );
};

export default ItemListContainer;
