import { FC } from "react";
import { Warning } from "./style";

type Props = {
  text: string;
};

const WarningPage: FC<Props> = ({ text }) => <Warning>{text}</Warning>;

export default WarningPage;
