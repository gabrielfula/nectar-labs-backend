import { prisma } from "../../../db/prisma";

import { Request, Response } from "express";

export class PetControllers {
  async get(request: Request, response: Response) {}
  async getbyId(request: Request, response: Response) {}
  async put(request: Request, response: Response) {}
  async post(request: Request, response: Response) {}
  async delete(request: Request, response: Response) {}
}
