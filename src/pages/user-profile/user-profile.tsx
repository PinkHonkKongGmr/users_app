import { FC } from "react";
import GetUsers from "../../features/get-users";
import User from "../../features/user";

const Users: FC = () => (
  <GetUsers>
    <User />
  </GetUsers>
);

export default Users;
