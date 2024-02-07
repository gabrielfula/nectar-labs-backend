import express from "express";
import { router } from "./routes";
import cors from "cors";

const app = express();

const PORT = 3001;

app.use(express.json());
app.use(router);
app.use(cors);

app.listen(PORT, () => console.log("http://localhost:3001/pets"));
