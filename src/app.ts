import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/std@0.178.0/dotenv/mod.ts";
import router from "./routes/router.ts";

const { DATA_API_KEY, APP_ID } = config();
const port = 3000;
const app = new Application();

app.use(router.routes());

await app.listen({ port });