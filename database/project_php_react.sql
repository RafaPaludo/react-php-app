-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 28, 2024 at 09:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE DATABASE project_react_php;

USE project_react_php;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_react_php`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--


CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock_qty` int(11) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `stock_qty`, `category`, `created_at`, `updated_at`) VALUES
(1, 'Mouse Gamer RGB', 'Mouse gamer com 7 botões programáveis e iluminação RGB', 150.00, 20, 'Periféricos 2', '2024-09-03 16:26:39', '2024-11-28 19:19:50'),
(2, 'Teclado Mecânico', 'Teclado mecânico com switches de alta durabilidade', 300.00, 15, 'Periféricos', '2024-11-24 16:26:39', '2024-11-24 16:26:39'),
(3, 'Monitor 24\" Full HD', 'Monitor com resolução Full HD e taxa de atualização de 75Hz', 800.00, 10, 'Monitores', '2024-10-08 16:26:39', '2024-11-24 22:43:25'),
(4, 'SSD 1TB', 'SSD de alta velocidade com 1TB de capacidade', 450.00, 30, 'Armazenamento', '2024-11-24 16:26:39', '2024-11-24 16:26:39'),
(5, 'Fone de Ouvido Bluetooth', 'Fone de ouvido sem fio com cancelamento de ruído', 200.00, 25, 'Áudio', '2024-10-01 16:26:39', '2024-11-24 22:43:14'),
(11, 'Monitor', 'Monitor 24 polegadas HDMI', 799.00, 190, 'Monitor', '2024-11-25 00:37:42', '2024-11-28 20:11:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
