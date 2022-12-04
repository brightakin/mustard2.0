import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MainSettingsDesktop from "./MainSettingsDesktop";
import MainSettingsMobile from "./MainSettingsMobile";

const MainSettings = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <MainSettingsMobile /> : <MainSettingsDesktop />}</>;
};

export default MainSettings;
