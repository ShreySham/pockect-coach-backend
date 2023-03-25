import { ObjectId } from "https://deno.land/x/atlas_sdk@v1.1.1/mod.ts";
import users from "../models/users.ts";

//@desc Get all tasks
//@route GET /

const getTasks = async ({ response }: { response: any }) => {
	response.body = "ReturnedTasks";
};

//@desc Post account details
//@route POST /api/v1/account
const postAccount = async ({
	request,
	response,
}: {
	request:any;
	response:any;
}) => {
	console.log("Handling account post");
	try {
		if (!request.body) {
			response.status = 400;
			response.body = {
				success:false,
				msg: "No Data",
			}
		} else {
			const body = await request.body();
			const accountInfo = await body.value;
			const insertedId = await users.insertOne({
				_id: new ObjectId(),
				accountInfo,
				created: new Date()
			});
			response.status = 201;
			response.body = {
				success: true,
				data: accountInfo,
				insertedId
			};
		}
	} catch (error) {
		response.body = {
			success: false,
			msg: error.toString(),
		}
	}
}

//@desc Get account details
//@route GET /api/v1/account
const getAccount = async ({
	params,
	response,
}: {
	params: {id: string};
	response:any;
}) => {
	try {
		if (!params.id) {
			response.status = 400;
			response.body = {
				success:false,
				msg: "No Account Id",
			}
		} else if(!ObjectId.isValid(params.id)) {
			response.status = 400;
			response.body = {
				success:false,
				msg: "Account Id is not valid",
			}
		} else {
			const userInfo = await users.findOne({
				_id: new ObjectId(params.id),
			});
			response.status = 200;
			response.body = {
				success: true,
				data: userInfo
			};
		}
	} catch (error) {
		response.body = {
			success: false,
			msg: error.toString(),
		}
	}
}

export { getTasks, postAccount, getAccount };