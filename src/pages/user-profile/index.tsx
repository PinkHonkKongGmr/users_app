import { FC } from "react";
import { useParams } from "react-router-dom";
import { columns } from "../../entities/users/const";
import { useGetUsers } from "../../entities/users/hooks/use-get-users";
import { User } from "../../entities/users/types";
import TableWithClickableCell from "../../shared/ui/table-with-clickable-cell";

const UserProfile: FC = () => {
  let { id } = useParams();
  const users = useGetUsers();

  if (!users) {
    return <div>loading</div>;
  }
  const currentUser = users.filter(
    ({ id: userId }) => userId.toString() === id
  );

  if (!Boolean(currentUser.length)) {
    return <div>Такого пользователя не найдено</div>;
  }

  return <TableWithClickableCell<User> columns={columns} rows={currentUser} />;
};

export default UserProfile;
