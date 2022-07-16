import { useEffect, useState } from "react";
import { User, UsersFromApi } from "../types";

export const useGetUsers = (): User[] | null => {
  const [userList, getUsers] = useState<User[] | null>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users: UsersFromApi) => {
        if (users && Array.isArray(users)) {
          getUsers(
            users.map(({ id, email, phone, name }) => ({
              id,
              email: email ?? "не указан",
              phone: phone ?? "не указан",
              name: name ?? "не указан",
            }))
          );
        }
      });
  }, []);

  return userList;
};
