import { FC } from "react";
import { Outlet } from "react-router";

const Layout: FC = () => (
  <>
    <Outlet />
  </>
);

export default Layout;
