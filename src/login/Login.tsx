import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
  Box,
} from "@mui/material";

const Login = () => {
  const theme = useTheme();
  return (
    <Container
      style={{
        color: theme.palette.primary.main,
      }}
    >
      <Stack spacing={"1.5rem"} marginTop={"20vh"}>
        <Typography variant="h5" color={"inherit"}>
          Ingresa a tu cuenta
        </Typography>
        <TextField
          id="standard-basic"
          label="Correo electronico"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Contraseña"
          variant="standard"
          type="password"
        />
        <Button
          variant="contained"
          href="/rooms"
          style={{
            marginTop: "2rem",
          }}
        >
          Iniciar Sesion
        </Button>
        <p text-align={"center"}> Olvidaste tu contraseña?</p>
        <Button variant="text">RECUPERALA</Button>
      </Stack>
    </Container>
  );
};

export default Login;
