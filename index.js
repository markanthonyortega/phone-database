const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');
const express = require('express');
const app = express();
const port = 3000;

AdminJS.registerAdapter(AdminJSMongoose);

const adminJS = new AdminJS({
  databases: [],
  rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJS);

app.use(adminJS.options.rootPath, router);
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
