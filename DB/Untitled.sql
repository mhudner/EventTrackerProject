-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema booksdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema booksdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `booksdb` DEFAULT CHARACTER SET utf8 ;
USE `booksdb` ;

-- -----------------------------------------------------
-- Table `booksdb`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `booksdb`.`book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(1000) NULL,
  `author` VARCHAR(45) NULL,
  `genre` VARCHAR(45) NULL,
  `publication_year` INT NULL,
  `description` VARCHAR(1000) NULL,
  `read_status` VARCHAR(45) NULL,
  `date_started` DATE NULL,
  `date_finished` DATE NULL,
  `rating` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE USER 'bookuser'@'localhost' IDENTIFIED BY 'bookuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE `booksdb`.* TO 'bookuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
