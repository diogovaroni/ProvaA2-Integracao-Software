-- CreateTable
CREATE TABLE "CadastroFolha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "horas" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "funcionario" TEXT NOT NULL
);
