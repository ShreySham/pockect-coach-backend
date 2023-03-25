import {
    MongoClient,
    ObjectId,
} from "https://deno.land/x/atlas_sdk@v1.1.1/mod.ts";

const client = new MongoClient({
    endpoint: `https://us-east-2.aws.data.mongodb-api.com/app/${Deno.env.get("APP_ID")}/endpoint/data/v1`,
    dataSource: "pocket-coach-cluster", // e.g. "Cluster0"
    auth: {
      apiKey: `${Deno.env.get("DATA_API_KEY")}`,
    },
});

export interface UserSchema {
    _id: ObjectId;
    email: string;
    username: string;
    avatar?: string;
    created: Date;

}

const db = client.database("test");
const users = db.collection<UserSchema>("users");

export default users;

