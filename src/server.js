const express = require('express')
const app = express()
const { createClient } = require("@astrajs/collections");

const port = 3000

app.get('/socials',async (req, res) => {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });
    const socialsCollection = astraClient
    .namespace("api")
    .collection("socials");
  const socials = await socialsCollection.find({});
  const response = Object.keys(socials).map((key) => {
    return {
      id: key,
      ...socials[key],
    };
  });
 res.send(response);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})