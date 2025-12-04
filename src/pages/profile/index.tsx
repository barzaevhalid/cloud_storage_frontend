import { Button } from "antd";
import type { User } from "../../api/dto/auth.dto";
import s from "./Profile.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log(user);

    axios.get("/me").then((res) => {
      setUser(res.data);
    });
  }, []);

  const onClickLogout = () => {};

  if (!user) return <div>loading...</div>;
  return (
    <div className={s.root}>
      <h1>Мой профиль</h1>
      <br />
      <p>
        ID: <b>{user.id}</b>
      </p>
      <p>
        Полное имя: <b>{user.fullName}</b>
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
