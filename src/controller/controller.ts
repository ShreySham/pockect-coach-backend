const BASE_URI = `https://us-east-2.aws.data.mogodb-api.com/app/${APP_ID}/endpoint/data/v1/`;
const DATA_SOURCE = "pocket-coach-cluster";
const DATABASE = "pocketCoach";
const COLLECTION = "userAccount"; 

//@desc Get all tasks
//@route Get /

const getTasks = async ({ response }: { response: any }) => {
	response.body = "ReturnedTasks";
};

//@desc Post account details
//@route Post /api/v1/account
const postAccount = async ({
	request,
	response,
}: {
	request:any;
	response:any;
}) => {
	try {
		if (!request.body) {
			response.status = 400;
			response.body = {
				success:false,
				msg: "No Data",
			}
		} else {
			
		}
	} catch (error) {
		response.body = {
			success: false,
			msg: error.toString(),
		}
	}
}

export { getTasks, postAccount };