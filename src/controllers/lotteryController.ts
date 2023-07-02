import { deleteGameByIdDB, editGameByIdDB, getGamesDB, postFavoriteDB, verifyID } from "../repositories/lotteryRepositorie";
import { Request, Response } from "express";

export async function getMyGames(req: Request, res: Response){
    const games = await getGamesDB();
    res.send(games)
}

export async function createFavoriteGame(req: Request, res: Response){
    const { numbers } = req.body;
    const insertion = await postFavoriteDB(numbers)
    res.sendStatus(201)
}

export async function deleteGameByID(req: Request, res: Response){
    const { id } = req.params
    const verification = await verifyID(id)
    const deletion = await deleteGameByIdDB(id)
    res.sendStatus(200)
}

export async function editGameByID(req: Request, res: Response){
    const { numbers } = req.body;
    const { id } = req.params
    const verification = await verifyID(id)
    const edition = await editGameByIdDB(id,numbers)

    res.sendStatus(200)
}