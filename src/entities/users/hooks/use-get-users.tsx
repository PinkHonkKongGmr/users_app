import { useEffect, useState } from "react";
import { User, UsersFromApi } from "../types";

export const useGetUsers = (userId?: string): User[] | null | string => {
  const [userList, getUsers] = useState<User[] | null | string>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users: UsersFromApi) => {
        if (users && Array.isArray(users)) {
          const normalizedUsers: User[] = users.map(
            ({ id, email, phone, name }) => ({
              id,
              email: email ?? "не указан",
              phone: phone ?? "не указан",
              name: name ?? "не указан",
            })
          );
          const resultUsers = userId
            ? normalizedUsers.filter(({ id }) => userId === id.toString())
            : normalizedUsers;
          getUsers(resultUsers);
        }
      })
      .catch(() => {
        getUsers("bad connection");
      });
  }, [userId]);

  return userList;
};
