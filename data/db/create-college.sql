CREATE TABLE IF NOT EXISTS college(
       id INT PRIMARY KEY,
       name VARCHAR(32),
       type VARCHAR(32),
       addr VARCHAR(128),
       email VARCHAR(64),
       brief_introduction VARCHAR(256),
       code VARCHAR(9),
       recruit_website VARCHAR(64),
       recruit_tel VARCHAR(64),
       province VARCHAR(32),
       logo VARCHAR(128),
       tuition_fee VARCHAR(256),
       property VARCHAR(16),
       member_ship VARCHAR(16)
) DEFAULT CHARACTER SET utf8;
