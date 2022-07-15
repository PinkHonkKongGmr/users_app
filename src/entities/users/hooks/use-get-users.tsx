import { useEffect, useMemo, useState } from "react";
import { User, UsersFromApi } from "../types";

export const useGetUsers = (): User[] | null => {
  const [fetchedUsers, getUsers] = useState<UsersFromApi[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        if (users && Array.isArray(users)) {
          getUsers(users);
        }
      });
  }, []);

  const userList: User[] | null = useMemo(
    () =>
      fetchedUsers.length > 0
        ? fetchedUsers.map(({ id, email, phone, name }) => ({
            id,
            email,
            phone,
            name,
          }))
        : null,
    [fetchedUsers]
  );
  return userList;
};
