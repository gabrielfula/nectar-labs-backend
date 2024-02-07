import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(router);
app.use(cors);

app.listen(PORT, () => console.log("Running"));
