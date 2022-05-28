import { Box, Stack, Typography } from "@mui/material";
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
          Techthella
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
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          <Box
            component={motion.div}
            sx={{ ...wrapper }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "100vw" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
          ></Box>
        </Typography>
      </Stack>
    </Box>
  );
}
