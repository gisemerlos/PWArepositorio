import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MainSection = () => {
  const subtitle =
    "¡Usar roomsite es realmente sencillo! Sigue estos tips  para que tu experiencia sea mas sensacional.";
  const sm = useMediaQuery("min-width(600px)");

  return (
    <Container
      sx={{
        background: "none",
      }}
    >
      <Box marginTop={"25"} display={"flex"} justifyContent={"center"}>
        <img src="https://cdn.pixabay.com/photo/2022/08/12/04/25/house-7380808_960_720.jpg " />
      </Box>
    </Container>
  );
};

export default MainSection;
