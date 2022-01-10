const {Router} = require("express");
const {ChildRecord} = require("../records/child.record");
const {GiftRecord} = require("../records/gift.record");
const {ValidationError} = require("../utils/errors");

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
        const child = await ChildRecord.getOne(req.params.childId);

        if (child === null) {
            throw new ValidationError('Nie znaleziono dziecka z podanym ID.');
        }
        const gift = req.body.giftId === '' ? null : await GiftRecord.getOne(req.body.giftId);

        child.giftId = gift === null ? null : gift.id;
        //to wyżej mozna zapisać po nowemu:
        // child.giftId = gift?.id ?? null;

        await child.update();
        // const gift = req.body.giftId === '' ? null : results[0]


        res.redirect('/child');

        // res.render('gift/list', {
        //     giftsList,
        // })

    });

module.exports = {
    childRouter,
};