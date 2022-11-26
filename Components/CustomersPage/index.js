import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomersPageDesktop from "./CustomersPageDesktop";
import CustomersPageMobile from "./CustomersPageMobile";

const CustomersPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <CustomersPageMobile /> : <CustomersPageDesktop />}</>;
};

export default CustomersPage;
