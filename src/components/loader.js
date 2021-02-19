import { CircleLoader } from "react-spinners";
import { css } from "@emotion/react";

const override = css`
  margin: 25px;
`;

const Loader = (props) => {
  return (
    <CircleLoader
      css={override}
      color="darkblue"
      size={100}
      style={{ margin: "50px" }}
    />
  );
};

export default Loader;
