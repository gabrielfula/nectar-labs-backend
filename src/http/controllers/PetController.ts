import { prisma } from "../../../db/prisma";

import { Request, Response } from "express";

export class PetControllers {
  async get(request: Request, response: Response) {
    try {
      const pets = await prisma.pet.findMany();

      return response.json(pets);
    } catch (error) {
      return response.json({ message: error });
    }
  }

  async getbyId(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const pets = await prisma.pet.findUnique({
        where: {
          id: Number(id),
        },
      });

      if (!pets) {
        return response.json({ message: "Pets is not created." });
      }

      return response.json(pets);
    } catch (error) {
      return response.json({ message: error });
    }
  }

  async put(request: Request, response: Response) {
    const { id } = request.params;
    const { adocao } = request.body;

    const petExist = await prisma.pet.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!petExist) {
      return response.json({ message: "Pet does not exist" });
    }

    const updatePets = await prisma.pet.update({
      where: {
        id: Number(id),
      },
      data: {
        adocao,
      },
    });

    return response.json({ message: "Pet successfully updated" });
  }

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

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const pets = await prisma.pet.delete({
        where: {
          id: Number(id),
        },
      });

      return response.json({ message: "Pet successfully deleted" });
    } catch (error) {
      return response.json({ message: error });
    }
  }
}
