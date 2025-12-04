import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import s from "../styles/Home.module.scss";

export default function Layout() {
  return (
    <>
      <div>
        <title>Dashboard / Profile</title>
      </div>
      <main>
        <Header />
        <div className={s.main}>
          <div className={s.layout}>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}
