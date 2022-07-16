import { FC, useContext } from "react";
import { columns } from "../../entities/users/constants";
import { userContext } from "../../entities/users/context";
import { User } from "../../entities/users/types";
import TableWithClickableCell from "../../shared/ui/table-with-clickable-cell";

const UserProfile: FC = () => {
  const users = useContext(userContext);

  if (!Boolean(users!.length)) {
    return <div>Такого пользователя не найдено</div>;
  }
  return <TableWithClickableCell<User> columns={columns} rows={users!} />;
};

export default UserProfile;
