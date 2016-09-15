## GraphQL + PostgreSQL workshop

This repository contains the workshop on GraphQL and PostgreSQL, first given at Strange Loop 2016.

### Step 1 - Environment Setup

In this step we'll setup our environment so we can follow the rest of the workshop.

First of all, you'll need to install [Node.js](https://nodejs.org/en/) as well as [Docker](https://www.docker.com/) on your development system.

Next, you'll need to clone this repository onto your local machine:

```
git clone https://github.com/lfittl/graphql-workshop.git -b step-1
```

In the `graphql-workshop` directory, run the following:

```
npm install
```

This will install a first set of Node.js libraries we need for both our server and client.

Next we need to setup our database by running this inside the `graphql-workshop` directory:

```
docker-compose up -d
```

(if this gives you an error you need to setup Docker on machine correctly)

You can verify with `docker ps` that the instance is running, the output should look like this:

```
gajah:Code lfittl$ docker ps 
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
10a2832fc3a0        postgres:9.5        "/docker-entrypoint.s"   7 minutes ago       Up 7 minutes        0.0.0.0:5432->5432/tcp   graphqlworkshop_db_1

```

Finally, we can now run `npm start`, which boots up the web server, as well as the webpack dev server.

To confirm everything is working, go into your web browser and open http://localhost:5000/ - you should see a Hello World message like this there:

![](https://d17oy1vhnax1f7.cloudfront.net/items/2Q0z03452h0W3U280o2v/Screen%20Shot%202016-09-12%20at%203.21.26%20PM.png)

This data is loaded from your database using GraphQL - you're ready to do the workshop now :)

### Step 2 - Efficient Queries

1. Run `git fetch` then `git checkout step-2`
2. Load the schema using `cat data/sql/00_schema.sql | docker exec -i graphqlworkshop_db_1 psql -U workshop`
3. Load the data using `cat data/sql/01_sample_song.sql | docker exec -i graphqlworkshop_db_1 psql -U workshop`
4. Look through the code together
5. Add support for showing the Instruments of a Sequencer (client and server-side!)

### Step 3 - Effective Mutations

1. Run `git fetch` then `git checkout step-3`
2. Look through the code together
3. Add support for adding and deleting the Instruments to a Sequencer (client and server-side!)

### Step 4 - Reactive Subscriptions

1. Run `git fetch` then `git checkout step-4`
2. Enable LISTEN/NOTIFY using `cat data/sql/02_notify.sql | docker exec -i graphqlworkshop_db_1 psql -U workshop`
3. Run `docker exec -it graphqlworkshop_db_1 psql -U workshop` and run `INSERT INTO sequencers (song_id, resolution, bars) VALUES ('00c60941-3c2f-4935-b2f3-589b4594d302', 32, 2);`
4. Look through the code together
5. Add support for subscribing to instrument creations (client and server-side!)

### Step 5 - Hack Time

1. Run `git fetch` then `git checkout step-5`

This gives you all the previous steps completed, together with some audible feedback. Now its up to you :-)

### Copyright

Licensed under the MIT license.<br />
Copyright (c) 2016, Lukas Fittl
