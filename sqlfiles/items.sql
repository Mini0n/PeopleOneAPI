-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 26, 2017 at 11:57 PM
-- Server version: 5.7.20-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PeopleOneAPI_development`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `area_id` bigint(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `name`, `area_id`, `created_at`, `updated_at`) VALUES
(1, 'Disco duro', 1, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(2, 'Puertos USB', 1, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(8, 'Mouse', 2, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(9, 'Teclado', 2, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(10, 'MS Office', 5, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(11, 'Loop Fabric', 5, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(12, 'Wired', 6, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(13, 'Wireless', 6, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(14, 'Cableado', 7, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(15, 'Wireless', 7, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(16, 'SalesForce', 8, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(17, 'GoogleCalendar', 8, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(18, 'Windows', 9, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(19, 'JD Edwards', 9, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(20, 'Monitor', 10, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(21, 'Mouse', 10, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(22, 'Axtel', 11, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(23, 'Telmex', 11, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(24, 'Meraki', 12, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(25, 'HP', 12, '2017-11-01 00:00:00', '2017-11-01 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_items_on_area_id` (`area_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `fk_rails_026fc8ebc7` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
