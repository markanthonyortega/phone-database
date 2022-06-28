import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSMongoose from '@adminjs/mongoose';
import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
AdminJS.registerAdapter(AdminJSMongoose);
import Owner from './models/ownerModel.js';
import PhoneNumber from './models/phoneNumberModel.js';

const port = 3000;
const DB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB}.lnump.mongodb.net/?retryWrites=true&w=majority}`;
mongoose.connect(DB);

const app = express();

const menu = { name: 'Contact Database', icon: 'Person' };
const adminJs = new AdminJS({
  rootPath: '/admin',
  resources: [
    { resource: Owner, options: { parent: menu } },
    { resource: PhoneNumber, options: { parent: menu } },
  ],
});

const router = AdminJSExpress.buildRouter(adminJs);

app.use(adminJs.options.rootPath, router);
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
