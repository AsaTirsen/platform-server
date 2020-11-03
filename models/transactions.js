//const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");

const transactions = {
    deposit: function (res, body) {
        db.run("INSERT INTO transactions (user, cash, units, unit_price, type) VALUES (?, ?, ?, ?, ?)",
            body.userid,
            body.amount,
            0,
            0,
            body.type,
            function (err) {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "POST /deposit",
                            title: "No deposit",
                            detail: err.message
                        }
                    });
                }
                res.json({data: []});
            });
    },

    sell: function (res, body) {
        db.run("INSERT INTO transactions (user, cash, units, unit_price, type) VALUES (?, ?, ?, ?, ?)",
            body.userid,
            body.total,
            body.units * -1,
            body.unit_price,
            body.type,
            function (err) {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "POST /sell",
                            title: "No sell",
                            detail: err.message
                        }
                    });
                }
                res.json({data: []});
            });
    },
    withdrawal: function (res, body) {
        db.run("INSERT INTO transactions (user, cash, units, unit_price, type) VALUES (?, ?, ?, ?, ?)",
            body.userid,
            body.amount * -1,
            0,
            0,
            body.type,
            function (err) {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "POST /withdrawal",
                            title: "No withdrawal",
                            detail: err.message
                        }
                    });
                }
                res.json({data: []});
            });
    },

    buy: function (res, body) {
        db.run("INSERT INTO transactions (user, cash, units, unit_price, type) VALUES (?, ?, ?, ?, ?)",
            body.userid,
            body.total *-1,
            body.units,
            body.unit_price,
            body.type,
            function (err) {
                if (err) {
                    return res.status(500).json({
                        errors: {
                            status: 500,
                            source: "POST /buy",
                            title: "No buy",
                            detail: err.message
                        }
                    });
                }
                res.json({data: []});
            });
    },


    getBalance: function(res, userid) {
        let sql = `SELECT SUM(cash) AS cash_balance, SUM(units) AS unit_balance FROM transactions WHERE user = ?`;

        db.all(
            sql, userid,
            function (err, rows) {
                if (err) {
                    res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/transactions",
                            title: "No balance",
                            detail: err.message
                        }
                    });
                }
                res.json({data: rows});
            });
    },
};

module.exports = transactions;
