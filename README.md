# pocket-coach-backend

Backend repo for the Pocket Coach App.

## Installing and running locally

Follow the instructions below to get the server running locally!

1. Install the backend
2. Install [Deno](https://deno.land/)
3. Run the backend

### Install the backend

Clone [pocket-coach-backend](https://github.com/ShreySham/pocket-coach-backend)

```
git clone https://github.com/ShreySham/pocket-coach-backend
```

### Install Deno

Follow the official [deno installation instructions](https://deno.land/manual@v1.31.1/getting_started/installation)

We use [denon](https://deno.land/x/denon@2.5.0) to run the application locally.

Follow the official [denon installation instructions](https://deno.land/x/denon@2.5.0#install) to install it.

#### Install dependencies

```
npm install
```

### Run the backend

Navigate into the Project directory and run

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
