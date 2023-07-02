import express , { json, Request, Response } from "express"
import lotteryRouter from "./router/lotteryRouter";

const app = express();

app.use(json());

app.get("/health", (req: Request ,res: Response)=>{res.send("I am OK!")} )
app.use(lotteryRouter)


const port: number = 5000

app.listen(port, ()=>{console.log(`Server is running on port ${port}`)})
