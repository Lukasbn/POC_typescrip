import { notFoundError } from "../errors/not-found-error";
import { db } from "../database/databaseConfig";

export async function getGamesDB(){
    const {rows} = await db.query("SELECT * FROM games")
    const games = rows.map((item) => ({id : item.id,numbers : [Number(item.num1),Number(item.num2),Number(item.num3),Number(item.num4),Number(item.num5),Number(item.num6)]}))

    return games
}

export async function postFavoriteDB(numArray : number[]){
    const insertion = await db.query(`
    INSERT INTO games (num1,num2,num3,num4,num5,num6) VALUES ($1,$2,$3,$4,$5,$6)
    `,[numArray[0],numArray[1],numArray[2],numArray[3],numArray[4],numArray[5]])

    return insertion
}

export async function verifyID(id: string){
    const verification = await db.query(`
    SELECT * FROM games WHERE id = $1
    `,[id])

    if (verification.rowCount === 0) {
        throw notFoundError();
    }

    return verification.rowCount
}

export async function deleteGameByIdDB(id: string){
    const deletion = await db.query(`
    DELETE FROM games WHERE id = $1
    `,[id])

    if (deletion.rowCount === 0) {
        throw notFoundError();
    }

    return deletion.rowCount
}

export async function editGameByIdDB(id:string, numArray: number[]){
    const edition = await db.query(`
    UPDATE games SET num1=$1,num2=$2,num3=$3,num4=$4,num5=$5,num6=$6 WHERE id=$7
    `,[numArray[0],numArray[1],numArray[2],numArray[3],numArray[4],numArray[5], id])

    return edition.rowCount
}