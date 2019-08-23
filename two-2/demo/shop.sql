# Host: localhost  (Version: 5.0.45-community-nt)
# Date: 2019-08-23 21:06:42
# Generator: MySQL-Front 5.3  (Build 4.43)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "product"
#

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `Id` int(11) NOT NULL auto_increment,
  `productname` text NOT NULL,
  `number` int(11) NOT NULL default '1',
  `unitprice` int(11) NOT NULL default '1',
  PRIMARY KEY  (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "product"
#

INSERT INTO `product` VALUES (1,'小米8',1,2400),(2,'小米6',1,1800),(3,'大米',1,50),(4,'白菜',1,10),(5,'iPhone8',1,1000),(6,'瓜',5,25),(7,'250',50,2),(8,'离卦',25,5),(10,'姑姑',50,5),(11,'gua',5,10),(12,'gg',5,5);

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL auto_increment,
  `username` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY  (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

INSERT INTO `user` VALUES (1,'lanr','123'),(2,'lis','123'),(3,'zhang','123'),(4,'gun','123');
