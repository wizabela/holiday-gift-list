const {ValidationError} = require("../utils/errors");
const {v4: uuid} = require("uuid");
const {pool} = require("../utils/db");

class ChildRecord {
    constructor(obj) {
        if (!obj.name || obj.name.length < 3 || obj.name.length > 25) {
            throw new ValidationError('Imię musi mieć od 3 do 55 znaków.');
        }

        this.id = obj.id;
        this.name = obj.name;
    }

    async insert() {
        if (!this.id) {
            this.id = uuid();
        }
        pool.execute("INSERT INTO `children`(`id`, `name`) VALUES(:id, :name)", {
            id: this.id,
            name: this.name,
        });
        return this.id;
    }
    static async listAll() {
        const [result] = await pool.execute("SELECT * FROM `children` ORDER BY `name` ASC");
        return result;
    }
}

module.exports = {
    ChildRecord,
};