const functions = require("firebase-functions");
const admin = require("firebase-admin");
const firebaseHelper = require("firebase-functions-helper");
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");


admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const storageRef = admin.storage();

const app = express();
const main = express();
const wordsCollection = 'words';
main.use('/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));


app.use(cors({ origin: true }));


// Add new word
app.post('/words', (req, res) => {
  let data = {
    "txt": req.body.txt,
    "lang": req.body.lang,
    "type": req.body.type,
  }
  console.log(data);

  firebaseHelper.firestore
      .createDocumentWithID(db, wordsCollection, req.body.id, data);
  res.send('Create a new word');
})
// Update new word
app.patch('/words/:wordId', (req, res) => {
  firebaseHelper.firestore
      .updateDocument(db, wordsCollection, req.params.wordId, req.body);
  res.send('Update a new word');
})
// View a word
app.get('/words/:wordId', (req, res) => {
  firebaseHelper.firestore
      .getDocument(db, wordsCollection, req.params.wordId)
      .then(doc => res.status(200).send(doc))
      .catch(error => { res.send(error)});
})
// View all words
app.get('/words', (req, res) => {
  firebaseHelper.firestore
      .backup(db, wordsCollection)
      .then(data => res.status(200).send(data))
      .catch(error => { res.send(error)});
})
// Delete a word 
app.delete('/words/:wordId', (req, res) => {
  firebaseHelper.firestore
      .deleteDocument(db, wordsCollection, req.params.wordId);
  res.send('Word deleted');
})

exports.Api = functions.https.onRequest(main);