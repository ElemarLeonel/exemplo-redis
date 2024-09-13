import { fetchUsers } from "../repositories/userRepository";

export const getUsers = async () => {
  return await fetchUsers();
};
