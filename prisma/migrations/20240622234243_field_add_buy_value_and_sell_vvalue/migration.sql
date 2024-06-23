/*
  Warnings:

  - You are about to drop the column `valor` on the `products` table. All the data in the column will be lost.
  - Added the required column `buyValue` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sellValue` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "buyValue" REAL NOT NULL,
    "sellValue" REAL NOT NULL
);
INSERT INTO "new_products" ("description", "id", "name") SELECT "description", "id", "name" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check("products");
PRAGMA foreign_keys=ON;
