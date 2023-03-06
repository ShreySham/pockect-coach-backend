import { Router } from "https://deno.land/x/oak/mod.ts";
import { getTasks, postAccount } from "../controller/controller";

const router = new Router();

router
    .get("/", getTasks)
    .post("/api/v1/account", postAccount)

export default router;