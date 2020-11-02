//const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");

const transactions = {
    deposit: function (res, body) {
        db.run("INSERT INTO transactions (user, cash, units, unit_price, type) VALUES (?, ?, ?, ?, ?)",
            body.user,
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

    getBalance: function(res) {
        let sql = ``;

        db.all(
            sql,
            function (err, rows) {
                if (err) {
                    res.status(500).json({
                        errors: {
                            status: 500,
                            source: "/texts",
                            title: "Database error",
                            detail: err.message
                        }
                    });
                }

                res.json({data: rows});
            });
    },
};

module.exports = transactions;
