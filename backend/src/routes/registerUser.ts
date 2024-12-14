import prisma from "../prisma"
import express from 'express';

const app = express();

app.use(express.json());


export default app.post('/user', async(req, res) => {
    const {ap, propietario, administradores, emails, telefones} = req.body
    try{
        const newUser = await prisma.condominio.create({
            data: {
                ap,
                propietario,
                administradores,
                emails,
                telefones,
            },

        })
    }catch(error){
        console.log("Erro ao fazer registro de um novo morador", error);
    }
})
