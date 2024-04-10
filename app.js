import express from "express";
import bodyParser from "body-parser";
import { Sequelize } from "sequelize";
import defineProfileModel from "./Profile.js";
import cors from "cors";

const app = express();
const sequelize = new Sequelize("sqlite:database.sqlite");
const Profile = defineProfileModel(sequelize);

app.use(bodyParser.json());
app.use(cors());

app.post("/api/profiles", async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    console.log(profile.dataValues);
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
