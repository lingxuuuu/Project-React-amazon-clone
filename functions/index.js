const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require("stripe")('sk_test_51HsxwEBYH6i1RLNOm7cUC7mux71AgbEMBBcOS5vJiD8k14s8GNTcSsEHi5O95Xst0Fw9WEsOTl3Q7RkTpZy3t7mV00UdPBO29z')

//Setup API Steps

// -App config
const app = express();

// -Middlewares
app.use(cors( {origin: true }));
app.use(express.json());

// -API routes
app.get('/', (req, res) => res.status(200).send('Hello world'))

app.post("/payments/create", async (req, res) => {
    const total = req.query.total;
  
    console.log(total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
  
    //Everything looks good, let's create
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
  });

// -Listen command
exports.api = functions.https.onRequest(app)

// example endpoint:
// http://localhost:5001/clone-48dbe/us-central1/api






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
