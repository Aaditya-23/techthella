import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { container } from "./Styles";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ ...container }}
    >
      <Typography
        variant="p"
        component="div"
        sx={{ fontSize: { xs: 25, sm: 40 }, fontWeight: "bold" }}
      >
        Techthella
      </Typography>

      <Stack direction="row" gap={2} >
        <Typography
          variant="p"
          component={Link}
          to="#"
          fontSize={{ xs: 12, sm: 16 }}
        >
          Services
        </Typography>
        <Typography
          variant="p"
          component={Link}
          to="#"
          fontSize={{ xs: 12, sm: 16 }}
        >
          About Us
        </Typography>
        <Typography
          variant="p"
          component={Link}
          to="#"
          fontSize={{ xs: 12, sm: 16 }}
        >
          Contact Us
        </Typography>
      </Stack>
    </Stack>
  );
}
