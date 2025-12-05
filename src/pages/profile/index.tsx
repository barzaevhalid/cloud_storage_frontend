import { Button } from "antd";
import type { User } from "../../api/dto/auth.dto";
import s from "./Profile.module.scss";
import { useEffect, useState } from "react";
import * as Api from "../../api";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log(user);
    const getMe = async () => {
      const user = await Api.auth.getMe();
      setUser(user);
    };
    getMe();
  }, []);

  const onClickLogout = () => {
    if (window.confirm("Are you really want to exit ?")) {
      Api.auth.logout();
      location.href = "/auth";
    }
  };

  if (!user) return <div>loading...</div>;
  return (
    <div className={s.root}>
      <h1>Мой профиль</h1>
      <br />
      <p>
        ID: <b>{user.id}</b>
      </p>
      <p>
        Полное имя: <b>{user.fullname}</b>
      </p>
      <p>
        E-Mail: <b>{user.email}</b>
      </p>
      <br />
      <Button onClick={onClickLogout} type="primary" danger>
        Выйти
      </Button>
    </div>
  );
}
