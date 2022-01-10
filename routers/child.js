const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");

const childRouter = Router();

childRouter // wszystkie ścieżki zaczynają się od '/child'

    .get('/', async (req, res) => {
        const childrenList = await ChildRecord.listAll();
        const giftsList = await GiftRecord.listAll();

        res.render('children/list', {
            childrenList,
            giftsList,
        });
    })
    .post('/', async (req, res) => {
        const newChild = new ChildRecord(req.body);
        await newChild.insert();

        res.redirect('/child');

        // res.render('gift/list', {
        //     giftsList,
        // })

    })
    .patch('/gift/:childId', async (req, res) => {
        const newChild = new ChildRecord(req.body);
        await newChild.insert();

        res.redirect('/child');

        // res.render('gift/list', {
        //     giftsList,
        // })

    });

module.exports = {
    childRouter,
};