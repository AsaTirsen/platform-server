CREATE TABLE IF NOT EXISTS users
(
    id       INTEGER PRIMARY KEY,
    email    VARCHAR(255) NOT NULL,
    password VARCHAR(60)  NOT NULL,
    UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS transactions
(
    id   INTEGER PRIMARY KEY,
    user INTEGER NULL,
    cash INTEGER NULL,
    units INTEGER NULL,
    time DATETIME DEFAULT CURRENT_TIMESTAMP,
    unit_price INTEGER NULL,
    type VARCHAR(12) NOT NULL,
          FOREIGN KEY(user) REFERENCES users(id)
);
