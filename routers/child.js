const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");

const childRouter = Router();

childRouter // wszystkie ścieżki zaczynają się od '/child'

    .get('/', (req, res) => {
        const childrenList = ChildRecord.listAll();
        const giftsList = GiftRecord.listAll();

        res.render('children/list', {
            childrenList,
            giftsList,
        });
    });

module.exports = {
    childRouter,
};