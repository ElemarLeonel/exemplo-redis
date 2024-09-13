import express from "express";
import { getUsersController } from "./controllers/userController";

const app = express();
const PORT = 3000;

app.get("/users", getUsersController);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
});
