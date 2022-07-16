import { FC } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../entities/users/context";
import { useGetUsers } from "../../entities/users/hooks/use-get-users";

type Props = {
  children?: React.ReactNode;
};

const GetUsers: FC<Props> = ({ children }) => {
  let { id } = useParams();
  const data = useGetUsers(id);

  if (!data) {
    return <div>loading</div>;
  }

  if (typeof data === "string") {
    return <div>{data}</div>;
  }

  return <userContext.Provider value={data}>{children}</userContext.Provider>;
};

export default GetUsers;
