import { createClient } from "redis";

const redisClient = createClient();

redisClient.on("error", (err) =>
  console.error("Erro ao conectar no Redis", err)
);

(async () => {
  await redisClient.connect();
})();

export const setCache = async (
  key: string,
  value: string,
  expiry = 3600
): Promise<void> => {
  try {
    await redisClient.set(key, value, {
      EX: expiry,
    });
  } catch (err) {
    console.error("Erro ao configurar o cache:", err);
  }
};

export const getCache = async (key: string): Promise<string | null> => {
  try {
    const data = await redisClient.get(key);
    return data;
  } catch (err) {
    console.error("Erro ao pegar o cache:", err);
    return null;
  }
};

export default redisClient;
