## Step 4 - Reactive Subscriptions

1. Run `git pull origin step-4` to get the latest version of this branch
2. Enable LISTEN/NOTIFY using `cat data/sql/02_notify.sql | docker exec -i graphqlworkshop_db_1 psql -U workshop`
3. Run `docker exec -it graphqlworkshop_db_1 psql -U workshop` and run `INSERT INTO sequencers (song_id, resolution, bars) VALUES ('00c60941-3c2f-4935-b2f3-589b4594d302', 32, 2);`
4. Look through the code together
5. Add support for subscribing to instrument creations (client and server-side!)
