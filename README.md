# Synergy

Frontend part for this project was generated with React version 17.0.2.
Backend part for this project was generated with Node.js version 14.17.0.

# Fill database with mock data

To fill database with mock data first of all you need to update your DB structure. For this change 'force' option value to 'true' in function sequelize.sync (server.js, line 23).
Reload your server with CTRL+S. After that, again change option 'force' value, but this time to 'true'. Now, uncomment function 'fillDatabase' and reload your server with CTRL+S. After that, your database will be filled with mock data. Don't forget to comment 'fillDatabase' function, because if you don't do this, your database will be filled with same data again or you get some errors.

# Rules for use ESlint

-Intend in 2 spaces;
-Use allways semicolons;
-Only single quotes;
-When u import components no need type .jsx, .js extension;
-No need anymore use props;
-Shows warn for console.log;
-Please install extensions to IDE 'Prettier', 'ESlint';