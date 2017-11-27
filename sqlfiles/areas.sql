-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 26, 2017 at 11:56 PM
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
-- Table structure for table `areas`
--

CREATE TABLE `areas` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `catalog_id` bigint(20) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `areas`
--

INSERT INTO `areas` (`id`, `name`, `catalog_id`, `created_at`, `updated_at`) VALUES
(1, 'CPU', 1, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(2, 'Perifericos', 1, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(5, 'Applications', 2, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(6, 'Networking', 2, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(7, 'Red', 3, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(8, 'Aplicationes', 3, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(9, 'Assessment', 4, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(10, 'Hardware', 4, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(11, 'Servicios', 5, '2017-11-01 00:00:00', '2017-11-01 00:00:00'),
(12, 'Fabricantes', 5, '2017-11-01 00:00:00', '2017-11-01 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_areas_on_catalog_id` (`catalog_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `areas`
--
ALTER TABLE `areas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `areas`
--
ALTER TABLE `areas`
  ADD CONSTRAINT `fk_rails_538c6a075f` FOREIGN KEY (`catalog_id`) REFERENCES `catalogs` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
