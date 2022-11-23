import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import UploadPageDesktop from "./UploadPageDesktop";
import UploadPageMobile from "./UploadPageMobile";

const UploadPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <UploadPageMobile /> : <UploadPageDesktop />}</>;
};

export default UploadPage;
