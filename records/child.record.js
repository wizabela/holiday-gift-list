class ChildRecord {
    static listAll() {
        return [
            {
                id: 'cdbc',
                name: 'Ania',
                gift: 'Tamburyn',
            },
            {
                id: 'abcd',
                name: 'Roman',
                gift: 'Koparka',
            },
        ];
    }
}

module.exports = {
    ChildRecord,
};