import React, { HtmlHTMLAttributes } from "react";
import { useState } from "react";

const RegisterUser: React.FC = () => {
  const [condominio, setCondominio] = useState({
    ap: "",
    propietario: "",
    administradores: "",
    emails: "",
    telefones: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCondominio({ ...condominio, [e.target.name]: e.target.value });
  };

  const onForm = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onForm}>
        <label htmlFor="text">Apartamento</label>
        <input
          type="text"
          name="ap"
          value={condominio.ap}
          required
          onChange={handleChange}
        />
        <label htmlFor="propietario">Propietario</label>
        <input
          type="text"
          name="propietario"
          value={condominio.ap}
          required
          onChange={handleChange}
        />
        <label htmlFor="administradores">Administradores</label>
        <input
          type="text"
          name="string"
          value={condominio.administradores}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={condominio.emails}
          required
          onChange={handleChange}
        />
        <label htmlFor="text">Telefone</label>
        <input
          type="text"
          name="telefones"
          value={condominio.telefones}
          required
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default RegisterUser;
