## Step 1

In this step we'll setup our environment so we can follow the rest of the workshop.

First of all, you'll need to install [Node.js](https://nodejs.org/en/) as well as [Docker](https://www.docker.com/) on your development system.

Next, you'll need to clone this repository onto your local machine:

```
git checkout git@github.com:lfittl/graphql-workshop.git -b step-1
```

In the `graphql-workshop` directory, run the following:

```
npm install
docker-compose up -d
```

This will install a first set of Node modules, as well as start the PostgreSQL instance in Docker.

You can verify with `docker ps -a` that the instance is running, the output should look like this:

```
```

Now you should be able to run `npm start` without errors.

To confirm everything is working, go into your web browser and open http://localhost:5000/ - you should see a Hello World message like this there:

## Running into issues?

Please reach out to me by email (lukas@fittl.com) or in the Strange Loop Slack (@lukasfittl).
