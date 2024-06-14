import "dotenv/config";
import express from "express";
import cors from "cors";

import agenteRouter from "./routes/agenteRoute.js";

export const app = express();

const __dirname = import.meta.dirname;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api/v1/agentes", agenteRouter);

app.use("*", (_, res) => {
  res.status(404).json({ ok: false, msg: "ruta no encontrada" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
