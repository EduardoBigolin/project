import { Server } from "./server";
import CONFIG from "../../../config/environments";

new Server().open(CONFIG.PORT_SERVER);
