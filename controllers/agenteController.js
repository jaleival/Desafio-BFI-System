import { AgenteModel } from "../models/agenteModel.js";
import { handleErrorsDatabase } from "../database/errorsDatabase.js";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AgenteModel.findOneByEmail(email);

    if (!user)
      return res.status(400).json({
        ok: false,
        msg: "El email no está registrado",
      });

    if (password !== user.password)
      return res.status(401).json({
        ok: false,
        msg: "Contraseña incorrecta",
      });

    const token = jwt.sign({ email: user.email }, process.env.SECRET_JWT, {
      expiresIn: "2m",
    });

    return res.json({
      token,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    const { code, msg } = handleErrorDatabase(error);
    return res.status(code).json({ ok: false, msg });
  }
};

export const AgenteController = {
  login,
};
