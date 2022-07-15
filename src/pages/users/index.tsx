import React, { FC, lazy, Suspense } from "react";
const Users = lazy(() => import("./users"));

const UsersPage: FC = () => {
  return (
    <Suspense>
      <Users />
    </Suspense>
  );
};

export default UsersPage;
