import { FC } from "react";
import { columns } from "../../entities/users/constants";
import { useGetUsers } from "../../entities/users/hooks/use-get-users";
import UserTable from "../../features/user-table";

const Users: FC = () => {
  const data = useGetUsers();

  if (!data) {
    return <div>loading</div>;
  }

  if (typeof data === "string") {
    return <div>{data}</div>;
  }

  return <UserTable columns={columns} rows={data} />;
};

export default Users;
