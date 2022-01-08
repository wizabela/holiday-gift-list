const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");

const childRouter = Router();



childRouter // wszystkie ścieżki zaczynają się od '/child'

    .get('/', (req, res) => {
        const childrenList = ChildRecord.listAll();

        res.render('children/list', {
            childrenList,
        });
    });

module.exports = {
    childRouter,
};