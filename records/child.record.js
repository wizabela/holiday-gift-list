const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require("uuid");
const {pool} = require("../utils/db");

class ChildRecord {


    static async listAll() {
        const [result] = await pool.execute("SELECT * FROM `children` ORDER BY `name` ASC");
        return result;
    }
}

module.exports = {
    ChildRecord,
};