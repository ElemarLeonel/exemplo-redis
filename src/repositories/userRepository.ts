import axios from "axios";
import { getCache, setCache } from "../utils/redisClient";

const RANDOM_USER_API = "https://randomuser.me/api/";

export const fetchUsers = async (): Promise<any> => {
  const cacheKey = "randomUser";

  const cachedData = await getCache(cacheKey);
  if (cachedData) {
    console.log("Dado recebido do cache");
    return JSON.parse(cachedData);
  }

  const response = await axios.get(RANDOM_USER_API);

  await setCache(cacheKey, JSON.stringify(response.data));

  return response.data;
};
