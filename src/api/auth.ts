import { destroyCookie } from "nookies";
import axios from "../core/axios";
import type {
  LoginFormDTO,
  LoginResponseDTO,
  RegisterFormDTO,
  RegisterResponseDTO,
  User,
} from "./dto/auth.dto";

export const login = async (
  values: LoginFormDTO
): Promise<LoginResponseDTO> => {
  console.log(values, "values");

  return (
    await axios.post("/login", values, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).data;
};

export const register = async (
  values: RegisterFormDTO
): Promise<RegisterResponseDTO> => {
  return (await axios.post("/register", values)).data;
};

export const getMe = async (): Promise<User> => {
  return (await axios.get("/me")).data;
};

export const logout = () => {
  destroyCookie(null, "_token", { path: "/" });
};
