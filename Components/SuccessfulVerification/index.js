import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SuccessfulVerificationDesktop from "./SuccesfulVerificationDesktop";
import SuccessfulVerificationMobile from "./SuccesfulVerificationMobile";

const SuccessfulVerification = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <SuccessfulVerificationMobile />
      ) : (
        <SuccessfulVerificationDesktop />
      )}
    </>
  );
};

export default SuccessfulVerification;
