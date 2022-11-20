import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DashboardDesktop from "./DashboardDesktop";
import DashboardMobile from "./DashboardMobile";

const Dasboard = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <DashboardMobile /> : <DashboardDesktop />}</>;
};

export default Dasboard;
