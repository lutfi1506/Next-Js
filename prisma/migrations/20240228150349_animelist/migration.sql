/*
  Warnings:

  - Added the required column `user_image` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` ADD COLUMN `user_image` VARCHAR(191) NOT NULL;
