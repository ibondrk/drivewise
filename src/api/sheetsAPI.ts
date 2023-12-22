import { client } from '../utils/fetchClient';
// import * as functions from 'firebase-functions';

const BASE_URL = `https://sheets.googleapis.com`;
const spreadsheetId = '1DbXGtByiXLCBAgVTYMptW88oVZ4SbTVbbTZ1n8Pwb9k';
// const APIKey = 'AIzaSyDFyDx3AZB2aPX2pjzFE0DYNQGflBwTWAE';

// const myVar = functions.config().googlesheet.spreadsheetid;

export const getTable = () => {
  console.log(client.get(`${BASE_URL}/v4/spreadsheets/${spreadsheetId}`));
  // return client.get();
};
