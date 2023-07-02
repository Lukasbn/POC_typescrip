import express , { json, Request, Response } from "express"
import 'express-async-errors'
import lotteryRouter from "./router/lotteryRouter";
import { handleApplicationErrors } from "./middlewares/error-handling-middleware";

const app = express();

app.use(json());

app.get("/health", (req: Request ,res: Response)=>{res.send("I am OK!")} )
app.use(lotteryRouter)
app.use(handleApplicationErrors);


const port: number = 5000

app.listen(port, ()=>{console.log(`Server is running on port ${port}`)})
