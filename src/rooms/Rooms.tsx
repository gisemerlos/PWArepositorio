import AccountCircle from "@mui/icons-material/AccountCircle";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
  InputLabel,
  Input,
  InputAdornment,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

const Rooms = () => {
  const [huespedes, setHuespedes] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setHuespedes(event.target.value as string);
  };
  return (
    <Box>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Seleccione Huespedes
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={huespedes}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
};

export default Rooms;
