-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "valor_reservado_caixa" REAL NOT NULL,
    "deleted_at" DATETIME
);
INSERT INTO "new_users" ("age", "deleted_at", "id", "name", "number", "password", "valor_reservado_caixa") SELECT "age", "deleted_at", "id", "name", "number", "password", "valor_reservado_caixa" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_number_key" ON "users"("number");
PRAGMA foreign_key_check("users");
PRAGMA foreign_keys=ON;
