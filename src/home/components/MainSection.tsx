import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  Stack,
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
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Box>
          <img
            width={350}
            src="https://thumbs.dreamstime.com/z/ventanas-de-departamentos-con-dibujos-animados-en-el-balc%C3%B3n-apartamentos-las-plantas-riego-balcones-relajantes-y-hablando-por-180302037.jpg?w=768 "
          />
        </Box>
        <p text-align={"center"}> Usar roomsite es realmente increible </p>
        <Button variant="contained" href="/login">
          {" "}
          SIGUIENTE{" "}
        </Button>
        <p margin-top={"20px"}> No queres ver esto?</p>
        <Box color={"#9FF781"}>
          <Button variant="text">SALTAR</Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default MainSection;
