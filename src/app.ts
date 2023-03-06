import { Application } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/std@0.178.0/dotenv/load.ts";
import router from "./routes/router.ts";

const port = 3000;
const app = new Application();

app.use(router.routes());

await app.listen({ port });