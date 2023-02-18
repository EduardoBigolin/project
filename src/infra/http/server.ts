import express from "express";
import routes from "./routes";

export class Server {
  private app = express();
  open(PORT: number) {
    this.middleware();
    this.routes();
    this.app.listen(PORT, () => {
      console.log(`
      [HTTP] 🚀 this api is listen in http://localhost:${PORT} 🚀
      `);
    });
  }
  middleware() {
    this.app.use(express.json());
  }
  routes() {
    this.app.use("/api/v1", routes);
  }
}
