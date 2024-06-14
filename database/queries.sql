CREATE TABLE agentes(
    EMAIL VARCHAR(255) PRIMARY KEY NOT NULL UNIQUE,
    PASSWORD VARCHAR(60) NOT NULL
);

INSERT INTO agentes (EMAIL, PASSWORD)
VALUES
('who@fbi.com', 'me'),
('where@fbi.com', 'there'),
('how@fbi.com', 'exactly');

SELECT * FROM agentes;