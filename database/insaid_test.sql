-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2022 at 11:11 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insaid_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'vinayak', 'vinayak@insaid.co', '$2b$10$7VnaH3atfYr/4aSKor7dh.bTF.g6pLweCKOkh3siuoa7q6BHZCLra'),
(2, 'vinayak', 'vinayak1@insaid.co', '$2b$10$UNZw0iSqov3SPDoNUeywV.Tnisi7KCi25LCF6dkYO4U19ha5GCQsG'),
(3, 'vinayak', 'vinayak11@insaid.co', '$2b$10$pNuZdaeTGbzgcRjqVlBDEOTNaGZnNGC/rtRbaOqd669dtZh9lqLVm'),
(4, 'vinayak', 'shubham@insaid.co', '$2b$10$Eil/zrD/RyTk/IrRSQRylu3V3Gj4zmzt1RGWQ5jAK59p/48uXPFN6'),
(5, 'vinayak', 'vin@insaid.co', '$2b$10$yidTSphZnQEi2HP/.a.0Auds80QZezfmvuDowR2nEs9IOGUOzfgzS'),
(6, 'vinayak', 'vin11@insaid.co', '$2b$10$8Avmk8a6FHOCfVBo4UTYC..GDgE1WljmB9uY.fwl8nN.ATEq7WtK.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
