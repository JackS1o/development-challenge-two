-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patient_name` VARCHAR(191) NOT NULL,
    `birth_date` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `patient_address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
