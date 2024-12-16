import { Router } from "express"
import exore
import prisma from "../prisma"

const router = Router()

router.get('./showUsers', (req, res)){
  const condominio = prisma.condominio.findMany()

  res.status(200).json(condominio)
}