import { Request, Response, NextFunction } from 'express';

import dotenv from "dotenv";
import {PrismaClient} from "@prisma/client";

dotenv.config()

const app = express ();
const prisma = new PrismaClient()


app.get("/"), (req: Request, res: Response) => {
    res.send("Bem Vindo ao registro de sistema de condomínio");
}

app.post("/condominio", async (req: Request, res: Response)){
    const {ap, propietario, administradores, emails, telefones} = req.body;

    try{
        const condominio = await prisma.condominio.create({
            data: {ap, propietario, administradores, emails, telefones}
        });
        res.status(201).json(condominio);
    } catch(error){
        res.status(500).json({error: "Erro ao criar condominio"});
    }
}