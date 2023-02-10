import express from "express";
import cors from "cors";

import ciudadesRoutes from "./src/routes/ciudadesRoutes";
import datosRoutes from "./src/routes/datosRoutes";

var app = express();

app.use(cors());

app.use("/ciudades", ciudadesRoutes);
app.use("/datos", datosRoutes);

export default app