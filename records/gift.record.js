class GiftRecord {
    static listAll() {
        return [
            {
                id: 'abc1',
                name: 'Tamburyn',
                count: 5,
            },
            {
                id: 'abc2',
                name: 'Koparka',
                count: 3,
            },
        ];
    }
}

module.exports = {
    GiftRecord,
};