### `Technical choices`
The backend is built in Express as it is a light, flexible and widely used framework with lots of online resources. The developer has previous experience with using Express, which means less overhead in time to learn.
Data storage is managed with a Sqlite database, using v Sqlite3. SQL was chosen because there was a need to aggregate rows in the table to get the sum of the purchased items, something that is possible in mongoDB but felt more straightforward with SQL. SQLite was used as it is light and flexible, however if this demo was to be developed into a real trading-platform mySQL would probably be preferred as it is more suitable for large-scale platforms.
JSON WebToken was used for authentication as it is safe and avoids the issue of creating sessions and returning cookies. Bcrypt is used to hash the user’s password.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:1350](http://localhost:1350) to view it in the browser.
.

### `npm production`

Changes error logging to production mode.
You will see errors in the console thanks to the Morgan module.


### `dependencies`
To install dependencies:
For Express, Cors and Morgan
npm install express cors morgan --save

For Sqlite
npm install sqlite3 --save

For bcryptjs
npm install bcryptjs

For JSON Web Token
npm install jsonwebtoken --save

For dotenv 
npm install dotenv
