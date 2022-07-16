import { FC } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { columns } from "../../entities/users/const";
import { useGetUsers } from "../../entities/users/hooks/use-get-users";
import { User } from "../../entities/users/types";
import TableWithClickableCell from "../../shared/ui/table-with-clickable-cell";

const Users: FC = () => {
  const users = useGetUsers();
  let navigate = useNavigate();
  let isItUsersPage = useMatch("users");

  if (!users) {
    return <div>loading</div>;
  }

  if (typeof users === "string") {
    return <div>{users}</div>;
  }

  const onClickHandler = (id: string | number) => () => {
    navigate(`${isItUsersPage ? ".." : "users"}/${id}`);
  };

  return (
    <TableWithClickableCell<User>
      columns={columns}
      rows={users}
      withPagination
      clickableCellIndex={0}
      onClick={onClickHandler}
    />
  );
};

export default Users;
