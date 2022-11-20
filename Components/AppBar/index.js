import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBarMobile from "./AppBarMobile";
import AppBarDesktop from "./AppBarDesktop";

const AppBar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <AppBarMobile /> : <AppBarDesktop />}</>;
};

export default AppBar;
