var EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "UserInfo", // Will use table name `category` as default behaviour.
    tableName: "UserInfo", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        Buyer: {
            type: "varchar",      
                },
        TileX: {
            type: "varchar",
        },
        TileY: {
            type: "varchar",
        },
        Zoom: {
            type: "varchar",
        },
        Longitude: {
            type: "varchar",
        },
        Latitude: {
            type: "varchar",
        } }
})