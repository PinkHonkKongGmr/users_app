import { FC } from "react";

import GetUsers from "../../features/get-users";
import UserList from "../../features/user-list";

const Users: FC = () => (
  <GetUsers>
    <UserList />
  </GetUsers>
);

export default Users;
