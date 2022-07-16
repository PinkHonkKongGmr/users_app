import { FC, lazy, Suspense } from "react";
const UserProfile = lazy(() => import("./user-profile"));

const UserProfilePage: FC = () => {
  return (
    <Suspense>
      <UserProfile />
    </Suspense>
  );
};

export default UserProfilePage;
