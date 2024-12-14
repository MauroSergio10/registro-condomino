"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/user', async (req, res) => {
    const { ap, propietario, administradores, emails, telefones } = req.body;
    try {
        const newUser = await prisma_1.default.condominio.create({
            data: {
                ap,
                propietario,
                administradores,
                emails,
                telefones,
            },
        });
    }
    catch (error) {
        console.log("Erro ao fazer registro de um novo morador", error);
    }
});
