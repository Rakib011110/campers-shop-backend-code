import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import globalErrorHandler from "./app/middlewares/errorHandler";
import notFoundHandler from "./app/middlewares/notFoundHandler";
const app: Application = express();

//parsers
app.use(express.json());

app.use(cors());

//  application routes
// app.use("/api/v1/");
app.use("/api/v1", router);

app.get("/api/v1", (req, res) => {
  res.send("Hello mongodb!");
});

// app.get("/", getTest);

// Error handlers (to be created)
// import globalErrorHandler from "../src/app/middlewares/errorHandler";
// import notFoundHandler from "../src/app/middlewares/notFoundHandler";

// app.use(globalErrorHandler);
// app.use(notFoundHandler);

// app.use(globalErrorHandler);
// app.use(notFoundHandler);

export default app;
