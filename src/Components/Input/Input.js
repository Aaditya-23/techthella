import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import { inputField } from "./Styles";

export default function Input() {
  const serviceData = ["Vegetables"];
  const locationData = ["Gandhi Nagar", "Preet Vihar", "Bawana"];

  return (
    <Stack direction="row" justifyContent="center" gap={2} mt={8}>
      <Autocomplete
        disablePortal
        id="user-service"
        options={serviceData}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Service"
            sx={{ ...inputField }}
          />
        )}
      />
      <Autocomplete
        disablePortal
        id="user-location"
        options={locationData}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Location"
            sx={{ ...inputField }}
          />
        )}
      />
      <Button variant="contained" sx={{ bgcolor: "white", color: "black" }}>
        Go
      </Button>
    </Stack>
  );
}
