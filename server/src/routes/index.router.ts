import express from "express";
import { helloworldRouter } from "./helloworld.route";
import { mqttRouter } from "./mqtt.route";

const router = express.Router();

router.use("/", helloworldRouter);
router.use("/mqtt",mqttRouter)
export { router };
