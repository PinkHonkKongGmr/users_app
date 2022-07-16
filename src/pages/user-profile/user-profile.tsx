import { FC } from "react";
import { useParams } from "react-router-dom";
import { columns } from "../../entities/users/constants";
import { useGetUsers } from "../../entities/users/hooks/use-get-users";
import { User } from "../../entities/users/types";
import TableWithClickableCell from "../../shared/ui/table-with-clickable-cell";

const UserProfile: FC = () => {
  let { id } = useParams();
  const data = useGetUsers(id);

  if (!data) {
    return <div>loading</div>;
  }

  if (typeof data === "string") {
    return <div>{data}</div>;
  }

  if (!Boolean(data.length)) {
    return <div>Такого пользователя не найдено</div>;
  }

  return <TableWithClickableCell<User> columns={columns} rows={data} />;
};

export default UserProfile;
