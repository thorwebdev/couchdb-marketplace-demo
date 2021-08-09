# CouchDB marketplace demo

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Node](https://nodejs.org/en/download/) >= v12.x.x

## Setup

### Set up env vars

- `cp .env.example app/.env.local`
- Open the newly created `.env.local` file in the `app` folder:
  - Set `COUCHDB_USER` to your preferred admin user name.
  - Set `COUCHDB_PASSWORD` to a secure admin password.

### Install dependencies and run the app

- Terminal 1
  - `npm run db:up`
- Terminal 2
  - `npm run bootstrap`
  - `cd app`
  - `npm run dev`
- Open http://localhost:3000/

### Stop the application

- In Terminal 2
  - Hit `ctrl` + `c` to stop the Next.js app.
  - Run `cd ../ && npm run db:down` to stop the CouchDB.

## API reference

An API reference for the backend API routes can be found at https://docs.page/thorwebdev/couchdb-marketplace-demo
