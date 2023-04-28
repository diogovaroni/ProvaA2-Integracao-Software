
import { Router } from "express";
import { CadastroFolhaController } from "../controllers/cadastroFolha.controller";

const router: Router = Router();

//CadastroFolha
router.get("/cadastroFolha", new CadastroFolhaController().listar);
router.get("/cadastroFolha/:id", new CadastroFolhaController().buscar);
router.post("/cadastroFolha", new CadastroFolhaController().cadastrar);



export { router };
