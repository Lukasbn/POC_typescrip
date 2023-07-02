import { getGamesDB } from "../repositories/lotteryRepositorie";
import { Request, Response } from "express";

export async function getMyGames(req: Request, res: Response){
    const games = await getGamesDB();
    res.send(games)
}

export async function createFavoriteGame(req: Request, res: Response){
    const { numbers } = req.body;
    console.log(numbers) 
    res.send(numbers)
}

export async function deleteGameByID(req: Request, res: Response){
    res.send("essa é a func 3")
}

export async function editGameByID(req: Request, res: Response){
    res.send("essa é a func 4")
}