import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import RegisterPageDesktop from "./RegisterPageDesktop";
import RegisterPageMobile from "./RegisterPageMobile";

const RegisterPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <RegisterPageMobile /> : <RegisterPageDesktop />}</>;
};

export default RegisterPage;
