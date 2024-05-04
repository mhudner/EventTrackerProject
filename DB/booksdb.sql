-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema booksdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `booksdb` ;

-- -----------------------------------------------------
-- Schema booksdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `booksdb` DEFAULT CHARACTER SET utf8 ;
USE `booksdb` ;

-- -----------------------------------------------------
-- Table `book`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `book` ;

CREATE TABLE IF NOT EXISTS `book` (
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

SET SQL_MODE = '';
DROP USER IF EXISTS bookuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'bookuser'@'localhost' IDENTIFIED BY 'bookuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'bookuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `book`
-- -----------------------------------------------------
START TRANSACTION;
USE `booksdb`;
INSERT INTO `book` (`id`, `title`, `author`, `genre`, `publication_year`, `description`, `read_status`, `date_started`, `date_finished`, `rating`) VALUES (1, 'ADHD Nation', 'lasdlknafs', 'fsgh', 2023, 'sdfdfggs', 'dfggdf', '2023/12/12', '2023/01/01', 'fdhsh');
INSERT INTO `book` (`id`, `title`, `author`, `genre`, `publication_year`, `description`, `read_status`, `date_started`, `date_finished`, `rating`) VALUES (2, 'asfsdg', 'fgdhjhj', 'dhgjgh', 2023, 'fsghfgh', 'dsfghfgsh', '2023/02/02', '2023/01/01', 'rtyrtwyy');

COMMIT;

