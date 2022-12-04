import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DevelopersDesktop from "./DevelopersDesktop";
import DevelopersMobile from "./DevelopersMobile";

const Developers = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <DevelopersMobile /> : <DevelopersDesktop />}</>;
};

export default Developers;
