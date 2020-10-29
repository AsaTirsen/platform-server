CREATE TABLE IF NOT EXISTS users
(
    id       INTEGER PRIMARY KEY,
    email    VARCHAR(255) NOT NULL,
    password VARCHAR(60)  NOT NULL,
    UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS transactions
(
    id       INTEGER PRIMARY KEY,
    prod_cat VARCHAR(255)  NOT NULL,
    user_balance INTEGER NULL,
    trans_price    INTEGER       NULL,
    amount    INTEGER       NULL,
    total INTEGER       NULL,
    purchase FALSE,
    vending FALSE,
    withdrawal FALSE,
    deposit FALSE,
    curr_user INTEGER NULL,
          FOREIGN KEY(curr_user) REFERENCES users(id)
);
