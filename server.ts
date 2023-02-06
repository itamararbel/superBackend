import cors from "cors";
// import expressRateLimit from "express-rate-limit";
import express from "express";
import config from "./config";
import pageNotFound from "./middleWere/pageNotFound";
import { catchAll } from './middleWere/catchAll';
import authController from "./controllers/authController";
import sanitize from "./middleWere/sanitize";
import cartsController from "./controllers/cartsController";
import productController from "./controllers/productController";
import logger from "./util/errorsLogger";
import connection from "./dal/mongo_connection";


const server = express();

connection()
 
var corsOptions = {
  "origin": "https://reliable-toffee-985cf9.netlify.app",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //expose which methods are allowed
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "exposedHeaders": "Authorization", //expose the Authorization header
}
server.use(cors(corsOptions));
// // server.use(expressRateLimit({ windowMs: 1000, max: 5, message: "plz wait a while..." }))
// server.use(sanitize);
server.use(express.json());
server.use("/api/auth", authController)
server.use("/api/carts", cartsController)
server.use("/api/products", productController);
server.use("*", pageNotFound);
server.use(catchAll)
server.listen(config.port, () => { setInterval(()=> console.log("listening to port" + config.port),1000) })

