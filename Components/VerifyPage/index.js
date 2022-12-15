import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import VerifyDesktop from "./VerifyDesktop";
import VerifyMobile from "./VerifyMobile";

const VerifyPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <VerifyMobile /> : <VerifyDesktop />}</>;
};

export default VerifyPage;
