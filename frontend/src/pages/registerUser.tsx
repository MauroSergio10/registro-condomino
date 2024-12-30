import React from "react";
import { useState } from "react";

const RegisterUser: React.FC = () => {
  const [condominio, setCondominio] = useState({
    ap: "",
    propietario: "",
    administradores: "",
    emails: "",
    telefones: "",
  });

  return (
    <div>
      <form>
        <label htmlFor="text">Apartamento</label>
        <input type="text" name="ap" value={condominio.ap} required />
        <label htmlFor="propietario">Propietario</label>
        <input type="text" name="propietario" value={condominio.ap} />
        <label htmlFor="administradores">Administradores</label>
        <input type="text" name="string" value={condominio.administradores} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={condominio.emails} />
        <label htmlFor="text">Telefone</label>
        <input type="text" name="telefones" value={condominio.telefones} />
      </form>
    </div>
  );
};

export default RegisterUser;
