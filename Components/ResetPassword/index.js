import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ResetPasswordDesktop from "./ResetPasswordDesktop";
import ResetPasswordMobile from "./ResetPasswordMobile";

const ResetPassword = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <ResetPasswordMobile /> : <ResetPasswordDesktop />}</>;
};

export default ResetPassword;
