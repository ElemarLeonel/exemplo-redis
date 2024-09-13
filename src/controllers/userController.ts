import { Request, Response } from "express";
import { getUsers } from "../services/userService";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar os usuários", error });
  }
};
