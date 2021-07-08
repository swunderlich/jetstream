import express from 'express';
import json from 'body-parser';
const app = express();
app.set('trust proxy', true);
app.use(json());

export {app};