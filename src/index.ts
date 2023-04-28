import express from "express";
import { router } from "./config/routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.clear();
  console.log("Aplicação de cadastro de folhas rodando na porta 3000");
});
