//const sqlite3 = require('sqlite3').verbose();
const db = require("../db/database.js");

const transactions = {
    getBalance: function(res) {
        let sql = `SELECT user_balance FROM transactions WHERE curr_user = ?`;

        db.all(
            sql, curr_user,
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
