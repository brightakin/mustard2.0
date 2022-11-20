import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InfoPageDesktop from "./InfoPageDesktop";
import InfoPageMobile from "./InfoPageMobile";

const InfoPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <InfoPageMobile /> : <InfoPageDesktop />}</>;
};

export default InfoPage;
