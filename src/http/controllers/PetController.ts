import { prisma } from "../../../db/prisma";

import { Request, Response } from "express";

export class PetControllers {
  async get(request: Request, response: Response) {}
  async getbyId(request: Request, response: Response) {}
  async put(request: Request, response: Response) {}
  async post(request: Request, response: Response) {
    const { nome, idade, especie, raca, adocao } = request.body;

    const isAdotted = adocao === "true" ? true : false;

    try {
      const pets = await prisma.pet.create({
        data: {
          nome,
          idade,
          especie,
          raca,
          adocao: isAdotted,
        },
      });

      return response.json(pets);
    } catch (error) {
      return response.json({ message: error });
    }
  }
  async delete(request: Request, response: Response) {}
}
