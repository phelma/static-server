'use strict';

let port = process.env.PORT || 3000;
let dir = 'public';

let express = require('express');
let ecstatic = require('ecstatic');
let app = express();

app.use(ecstatic({
  root: __dirname + '/' + dir
}));

app.listen(port, () => {
  console.log(`File server listening on port ${port}`);
});
