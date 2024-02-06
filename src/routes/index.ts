import { Router } from "express";
import { PetControllers } from "../http/controllers/PetController";

export const router = Router();

const petController = new PetControllers();

router.get("/pets", petController.get);
router.get("/pets/:id", petController.getbyId);
router.put("/pets/adopt/:id", petController.put);
router.post("/pets", petController.post);
router.delete("/pets/:id", petController.delete);
