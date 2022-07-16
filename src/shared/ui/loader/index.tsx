import CircularProgress from "@mui/material/CircularProgress";
import { LoaderWrapper } from "./style";

const Loader = () => (
  <LoaderWrapper>
    <CircularProgress color="secondary" />
  </LoaderWrapper>
);

export default Loader;
