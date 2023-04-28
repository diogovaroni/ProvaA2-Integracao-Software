
import { CadastroFolhaRepository } from "../data/cadastroFolha.repository";
import { Request, Response } from "express";
import { CadastroFolha } from "../models/cadastroFolha.model";

const repository = new CadastroFolhaRepository();

export class CadastroFolhaController {
  async listar(request: Request, response: Response) {
    const cadastroFolha = await repository.listar();
    return response.status(200).json({
      message: "ok",
      data: cadastroFolha,
    });
  }

  async cadastrar(request: Request, response: Response) {
    let cadastroFolha: CadastroFolha = request.body;

    cadastroFolha = await repository.cadastrar(cadastroFolha);

    return response.status(201).json({
      message: "Folha cadastrada!",
      data: cadastroFolha,
    });
  }

  async buscar(request: Request, response: Response) {
    const id = Number.parseInt(request.params.id);

    const folha = await repository.buscar(id);

    if (!folha) {
      return response.status(404).json({ message: "Folha não encontrada" });
    }
    //A PARTIR DAQUI NÃO É CERTEZA
    
    return response.status(200).json({
      message: "ok",
      data: folha,
    });
  }



}