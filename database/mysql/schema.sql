-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE


drop database if exists cowlist;

CREATE DATABASE cowlist;

USE cowlist;

/*create table

insert into movieList (id, title)
values (1, 'Mean Girls');


// cowList.cows.insert({cow_id: 1, cow_name: "Buttercup", cow_desc: "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock"});

// cowList.cows.insert({cow_id: 2, cow_name: "Daisy", cow_desc: "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties"});

// cowList.cows.insert({cow_id: 3, cow_name: "MooDonna", cow_desc: "archaic lady -- used as a form of respectful address"});

// cowList.cows.insert({cow_id: 4, cow_name: "MooLawn", cow_desc: "a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history"});




*/

CREATE TABLE cows (

  id INT NOT NULL AUTO_INCREMENT,
  cow_name VARCHAR(50) NOT NULL,
  cow_desc VARCHAR(200) NOT NULL,
  PRIMARY KEY (ID)
);

insert into cows (id, cow_name, cow_desc)
values (1, 'Buttercup', 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock');

insert into cows (id, cow_name, cow_desc)
values (2,'Daisy', 'a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties');

insert into cows (id, cow_name, cow_desc)
values (3, 'MooDonna', 'archaic lady -- used as a form of respectful address');

insert into cows (id, cow_name, cow_desc)
values (4, 'MooLawn', 'a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history');