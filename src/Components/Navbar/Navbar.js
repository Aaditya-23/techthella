import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { container } from "./Styles";
import CustomDrawer from "../Custom Drawer/CustomDrawer";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ ...container }}
    >
      <Stack direction="row" gap={1} alignItems="center">
        <CustomDrawer />
        <Typography
          variant="p"
          component="div"
          sx={{ fontSize: { xs: 25, sm: 40 }, fontWeight: "bold" }}
        >
          TechThella
        </Typography>
      </Stack>

      <Stack
        direction="row"
        display={{ xs: "none", sm: "flex" }}
        gap={{ xs: 1, sm: 2 }}
        alignItems="center"
      >
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
