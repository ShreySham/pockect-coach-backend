# pockect-coach-backend
Backend repo for the Pocket Coach App
# Installing the backend
Clone [the backend repo](https://github.com/ShreySham/pocket-coach-backend) into a project directory and follow the instructions below to get the server running locally!
## Installing deno
Follow the instructions [here](https://deno.land/manual@v1.31.1/getting_started/installation) to install [deno](https://deno.land/).

We use [denon](https://deno.land/x/denon@2.5.0) to run the application locally which can be installed [here](https://deno.land/x/denon@2.5.0#install).

## Running the backend
Navigate into the Project directory and run:
```
denon start
```
Thats it! the backend is running!

## Setting up MongoDB connections
In order to have the server connect to MongoDB, we have to provide the correct `APP_ID` and `DATA_API_KEY`. We chose to store these in a `.env` file in the project root with the following format:

```
DATA_API_KEY=YOUR_DATA_API_KEY
APP_ID=YOUR_APP_ID
```