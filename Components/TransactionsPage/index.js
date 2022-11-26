import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TransactionsDesktop from "./TransactionsDesktop";
import TransactionsMobile from "./TransactionsMobile";

const TransactionPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <TransactionsMobile /> : <TransactionsDesktop />}</>;
};

export default TransactionPage;
