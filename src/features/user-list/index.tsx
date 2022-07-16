import { FC, useContext } from "react";
import { columns } from "../../entities/users/constants";
import { userContext } from "../../entities/users/context";
import UserTable from "../../features/user-table";

const UserList: FC = () => {
  const users = useContext(userContext);

  return <UserTable columns={columns} rows={users!} />;
};

export default UserList;
