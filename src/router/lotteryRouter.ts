import { validateSchema } from "../middlewares/validateSchema";
import * as gamecontroller from "../controllers/lotteryController";
import { Router } from "express";
import { lotterySchema } from "../schemas/lotterySchemas";

const lotteryRouter = Router();

lotteryRouter.get("/lottery", gamecontroller.getMyGames);
lotteryRouter.post("/lottery", validateSchema(lotterySchema) ,gamecontroller.createFavoriteGame);
lotteryRouter.delete("/lottery/:id", gamecontroller.deleteGameByID);
lotteryRouter.put("/lottery/:id", gamecontroller.editGameByID);

export default lotteryRouter