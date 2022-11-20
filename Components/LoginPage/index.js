import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LoginPageDesktop from "./LoginPageDesktop";
import LoginPageMobile from "./LoginPageMobile";

const LoginPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <LoginPageMobile /> : <LoginPageDesktop />}</>;
};

export default LoginPage;
