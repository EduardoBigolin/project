import { Router } from "express";

const routes = Router();

routes.get("/", (_, res) => {
  res.status(200).json({
    message: "Hello word",
  });
});

export default routes;
