import Background from "../../Assets/Images/Background.jpg";

export const container = {
  color: "white",
};

export const image = {
  position: "absolute",
  top: 0,
  backgroundImage: `url(${Background})`,
  backgroundRepeat: { xs: "no-repeat", sm: "repeat" },
  backgroundSize: { xs: "cover", sm: "contain" },
  backgroundAttachment: "fixed",
  filter: "blur(3px)",
  width: "100vw",
  height: "100vh",
  zIndex: -1,
};

export const intro = {
  p:5,
  alignItems: "center",
  justifyContent: "center",
  gap: 3,
  // bgcolor: "red",
  height: "50vh",
};

export const customDiv = {
  overflow: "hidden",
  transformOrigin: "left",
  position: "relative",
  textAlign: "center",
  borderRadius: 15,
  p: 0.7,
  boxSizing: "border-box",
};

export const wrapper = {
  bgcolor: "#FAFAFA",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  borderRadius: 15,
};
