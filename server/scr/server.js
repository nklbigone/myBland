import "@babel/polyfill";
import express from "express";
import mongoose from "mongoose";
import contactRoute from "./routes/contacts";
import blogRoute from "./routes/blogs";
import articleRoute from "./routes/articles";
import queryRoute from "./routes/query";
import { upload } from "./utils/imageUpload";
import passport from "passport";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json'

dotenv.config();

//loading passpot

const app = express();
require("./config/passport").default(passport);
const { NODE_ENV, URL, MONGO_URI_TEST } = process.env;
mongoose.connect(NODE_ENV === "test" ? MONGO_URI_TEST : URL, {
  useNewUrlParser: true,
});
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected...");
});

//bodyparser

app.use(express.urlencoded({ extended: false }));

// passport middleware
app.use(passport.initialize());

app.use(express.json());
app.use(upload.single("blogPicture"));
app.use("/queries", queryRoute);
app.use("/contacts", contactRoute);
app.use("/blogs", blogRoute);
app.use("/articles", articleRoute);
app.use('/api/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
// app.use('/', require('./routes/index'))
app.use("/users", require("./routes/users"));
app.listen(process.env.PORT || 3001, () => {
  console.log("Server started");
});

export default app;
