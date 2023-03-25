import { Router } from "https://deno.land/x/oak/mod.ts";
import { getTasks, getAccount, postAccount } from "../controller/controller.ts";

const router = new Router();

router
    .get("/", getTasks)
    .get("/api/v1/account/:id", getAccount)
    .post("/api/v1/account", postAccount)

export default router;