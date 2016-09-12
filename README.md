## Step 1

In this step we'll setup our environment so we can follow the rest of the workshop.

First of all, you'll need to install [Node.js](https://nodejs.org/en/) as well as [Docker](https://www.docker.com/) on your development system.

Next, you'll need to clone this repository onto your local machine:

```
git clone git@github.com:lfittl/graphql-workshop.git -b step-1
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

## Running into issues?

Please reach out to me by email (lukas@fittl.com) or in the Strange Loop Slack (@lukasfittl).
