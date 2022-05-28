import { Box, Stack, Tooltip, Typography } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";
import { intro, container, customDiv, image, wrapper } from "./Styles";

export default function HomePage() {
  const variants = {
    hidden: {
      scaleX: 0,
    },

    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box sx={{ ...container }}>
      <Box sx={{ ...image }} />
      <Stack sx={{ ...intro }}>
        <Typography
          sx={{ ...customDiv, fontWeight: "bold" }}
          variant="h3"
          component={motion.div}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          TechThella
          <Box
            component={motion.div}
            sx={{ ...wrapper }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "100vw" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          ></Box>
        </Typography>

        <Typography
          sx={{ ...customDiv, fontSize: { xs: 15, sm: 18 } }}
          variant="p"
          component={motion.div}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          One Stop Solution For Vendors
          <Box
            component={motion.div}
            sx={{ ...wrapper }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "100vw" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          ></Box>
        </Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Typography
          variant="p"
          component="div"
          sx={{
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          By TechThella
        </Typography>
        <Box>
          <Tooltip title="Github" placement="bottom">
            <GitHub />
          </Tooltip>
        </Box>
      </Stack>
    </Box>
  );
}
