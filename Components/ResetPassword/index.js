import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BalanceHistoryDesktop from "./ResetPasswordDesktop";
import BalanceHistoryMobile from "./ResetPasswordMobile";

const BalanceHistory = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <BalanceHistoryMobile /> : <BalanceHistoryDesktop />}</>;
};

export default BalanceHistory;
