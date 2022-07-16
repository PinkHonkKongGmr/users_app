import { FC } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { User, UserBase } from "../../entities/users/types";
import TableWithClickableCell, {
  Column,
} from "../../shared/ui/table-with-clickable-cell";

type Props = {
  columns: Column<UserBase>[];
  rows: User[];
};

const UserTable: FC<Props> = ({ columns, rows }) => {
  let navigate = useNavigate();
  let isItUsersPage = useMatch("users");

  const onClickHandler = (id: string | number) => () => {
    navigate(`${isItUsersPage ? ".." : "users"}/${id}`);
  };

  return (
    <TableWithClickableCell<User>
      columns={columns}
      rows={rows}
      withPagination
      clickableCellIndex={0}
      onClick={onClickHandler}
    />
  );
};

export default UserTable;
