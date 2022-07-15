import { Routes, Route } from "react-router-dom";
import Layout from "./layout";
import NotFoundPage from "./not-found-page";
import UserProfile from "./user-profile";
import UsersPage from "./users";
const auth = true;

const Routing = () => {
  if (auth) {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<UsersPage />} />
          <Route path="users">
            <Route index element={<UsersPage />} />
            <Route path=":id" element={<UserProfile />} />
          </Route>
        </Route>
      </Routes>
    );
  }
  return <div>need auth</div>;
};

export default Routing;
