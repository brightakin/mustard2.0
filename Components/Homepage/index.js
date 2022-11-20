import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomePageDesktop from "./HomePageDesktop";
import HomePageMobile from "./HomePageMobile";

const HomePage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <HomePageMobile /> : <HomePageDesktop />}</>;
};

export default HomePage;
