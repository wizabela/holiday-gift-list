const {createPool} = require("mysql2/promise");

const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_holiday_gift',
    namedPlaceholders: true,
    decimalNumbers: true,
});

module.exports = {
    pool,
};