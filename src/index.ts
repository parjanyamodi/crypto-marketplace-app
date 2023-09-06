import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config'
import './db/mongo.db'

const app = express()

app.use(bodyParser.json())

const router = express.Router()

app.use("/api", router)

import productRoutes from "./routes/product.routes"
productRoutes(router)

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000")
}
)