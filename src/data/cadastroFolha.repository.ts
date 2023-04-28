import { PrismaClient } from "@prisma/client";
import { CadastroFolha } from "../models/cadastroFolha.model";

let produtos: CadastroFolha[] = [];

const prisma = new PrismaClient();

export class CadastroFolhaRepository {
  async listar(): Promise<CadastroFolha[]> {
    return await prisma.cadastroFolha.findMany();
  }

  async cadastrar(cadastroFolha: CadastroFolha | null): Promise<CadastroFolha> {
    await prisma.cadastroFolha.create({
      data: {
        mes: cadastroFolha!.mes,
        ano: cadastroFolha!.ano,
        horas: cadastroFolha!.horas,
        valor: cadastroFolha!.valor,
        funcionario: cadastroFolha!.funcionario,
      },
    });
    return cadastroFolha!;
  }

  async buscar(id: number): Promise<CadastroFolha | null> {
    return await prisma.cadastroFolha.findUnique({
      where: {
        id: id,
      },
    });
  }

}