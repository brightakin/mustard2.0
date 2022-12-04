import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardsPageDesktop from "./CardsPageDesktop";
import CardsPageMobile from "./CardsPageMobile";

const CardsPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <CardsPageMobile /> : <CardsPageDesktop />}</>;
};

export default CardsPage;
