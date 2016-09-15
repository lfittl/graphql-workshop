## Step 2 - Efficient Queries

1. Run `git pull origin step-2` to get the latest version of this branch
2. Load the schema using `cat data/sql/00_schema.sql | docker exec -i graphqlworkshop_db_1 psql -U workshop`
3. Load the data using `cat data/sql/01_sample_song.sql | docker exec -i graphqlworkshop_db_1 psql -U workshop`
4. Look through the code together
5. Add support for showing the Instruments of a Sequencer (client and server-side!)
