import { Menu, ChevronLeft, ChevronRight, GitHub } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  styled,
  Tooltip,
  useTheme,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const list = () => (
    <Box role="presentation">
      <DrawerHeader>
        <IconButton onClick={() => setIsOpen(false)}>
          {theme.direction === "ltr" ? (
            <ChevronLeft sx={{ color: "#1976d2" }} fontSize="large" />
          ) : (
            <ChevronRight sx={{ color: "#1976d2" }} fontSize="large" />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider flexItem sx={{ bgcolor: "#1976d2" }} />

      <List>
        <ListItem onClick={() => setIsOpen(false)}>
          <Stack direction="row" gap={1} width="100%">
            <Button
              sx={{ flex: 1 }}
              variant="contained"
              component={Link}
              to="#"
            >
              Sign in
            </Button>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "#1976d2" }}
            />
            <Button
              sx={{ flex: 1 }}
              variant="contained"
              component={Link}
              to="#"
            >
              Sign up
            </Button>
          </Stack>
        </ListItem>
      </List>

      <List sx={{ display: { sm: "none" } }}>
        <ListItem button onClick={() => setIsOpen(false)}>
          <Box component={Link} to="#" sx={{ width: "100%" }}>
            <ListItemText
              primary={"Services"}
              sx={{ color: "white" }}
            ></ListItemText>
          </Box>
        </ListItem>
        <ListItem button onClick={() => setIsOpen(false)}>
          <Box component={Link} to="#" sx={{ width: "100%" }}>
            <ListItemText
              primary={"About Us"}
              sx={{ color: "white" }}
            ></ListItemText>
          </Box>
        </ListItem>
        <ListItem button onClick={() => setIsOpen(false)}>
          <Box component={Link} to="#" sx={{ width: "100%" }}>
            <ListItemText
              primary={"Contact Us"}
              sx={{ color: "white" }}
            ></ListItemText>
          </Box>
        </ListItem>
      </List>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{ position: "absolute", bottom: 20, width: "100%" }}
        onClick={() => {
          window.location.href = "https://github.com/Aaditya-23/techthella";
        }}
      >
        <Tooltip title="Github" placement="top" TransitionComponent={Zoom}>
          <GitHub sx={{ color: "white" }} />
        </Tooltip>
      </Stack>
    </Box>
  );

  return (
    <>
      <IconButton sx={{ color: "#DEDEE4" }} onClick={() => setIsOpen(true)}>
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        sx={{ "& .MuiPaper-root": { bgcolor: "black", minWidth: "3in" } }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        {list()}
      </Drawer>
    </>
  );
}
