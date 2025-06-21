require("dotenv").config();
const express = require("express");
const app = express();
const sequelize = require("./models");
const tripsRouter = require("./routes/tripsRoutes");
const usersRouter = require("./routes/usersRoutes");

app.use(express.json());
app.use("/trips", tripsRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
