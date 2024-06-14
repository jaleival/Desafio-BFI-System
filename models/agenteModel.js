import { pool } from "../database/connection.js";

const findOneByEmail = async (email) => {
  const query = {
    text: `
            SELECT * FROM AGENTES
            WHERE EMAIL = $1
        `,
    values: [email],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

export const AgenteModel = {
  findOneByEmail,
};
