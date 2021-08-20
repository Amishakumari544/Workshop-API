const express = require('express')
const app = express()
const { createClient } = require("@astrajs/collections");

const port = 3000

app.get('/datas',async (req, res) => {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });
    const datasCollection = astraClient
    .namespace("api")
    .collection("datas");
  const datas = await datasCollection.find({});
  const response = Object.keys(datas).map((key) => {
    return {
      id: key,
      ...datas[key],
    };
  });
 res.send(response);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})