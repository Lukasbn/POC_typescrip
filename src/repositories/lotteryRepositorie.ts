import { GamesResult, dbRows } from "protocols";
import { db } from "../database/databaseConfig";

export async function getGamesDB(){
    const {rows} = await db.query("SELECT * FROM games")
    const games = rows.map((item) => ({id : item.id,numbers : [Number(item.num1),Number(item.num2),Number(item.num3),Number(item.num4),Number(item.num5),Number(item.num6)]}))

    return games
}