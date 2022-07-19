var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "UserData", // Will use table name `category` as default behaviour.
    tableName: "UserData", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        Buyer: {
            type: "varchar",      
                },
        TokenId: {
            type: "varchar",
        },
        MintTime: {
            type: "varchar",
        },
    },
})