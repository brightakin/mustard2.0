import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import WalletPageDesktop from "./WalletPageDesktop";
import WalletPageMobile from "./WalletPageMobile";

const WalletPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <WalletPageMobile /> : <WalletPageDesktop />}</>;
};

export default WalletPage;
