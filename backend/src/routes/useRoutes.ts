import {Router} from "express";
import prisma from "../prisma";

const router  = Router();

router.post("/user", async (req, res) => {
    const { ap, propietario, administradores, emails, telefones } = req.body;
    try {
        const newUser = await prisma.condominio.create({
            data: {
                ap,
                propietario,
                administradores,
                emails,
                telefones,
            },
        });
    } catch (error) {
        console.log("Erro ao fazer registro de um novo morador", error);
    }
});

router.get('/showUsers', async (req, res) => {
  try{
    const condominio = await prisma.condominio.findMany()

    res.status(200).json(condominio)
  }catch(error){
    res.status(500).json({error:"Erro ao buscar os condominios")
  }
});

export default router;