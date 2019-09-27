import sqlite3 from 'sqlite3';
import { stringify } from 'querystring';

class Material {
    // Declare class variables
    name: string;
    typeID: number;
    volume: number;
    groupID: number;
    marketGroupID: number;
    basePrice: number;
    baseAmount: number;
    complexMaterial: boolean;

    importFromDB(db: sqlite3.Database) {
        let sql: string = `SELECT * FROM invTypes WHERE
            typeID=?`
        db.get(sql, [this.typeID], (err, row) => {
            if (err) {
                return console.error(err.message);
            }
            this.groupID = row.groupID;
            this.name = row.name;
            this.volume = row.volume;
            this.basePrice = row.basePrice;
            this.marketGroupID = row.marketGroupID;
            });
        
        
    }

    constructor(typeID: number, baseAmount: number, db: sqlite3.Database) {
        this.typeID = typeID;
        this.baseAmount = baseAmount;
        this.importFromDB(db);
    }
}