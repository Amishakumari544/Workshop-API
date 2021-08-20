const pactum = require('pactum');
const { Given, When, Then, Before } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => { spec = pactum.spec(); });

Given('I make a GET request to {string}', function (url) {
  spec.get(url);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', async function (code) {
  spec.response().should.have.status(code);
});

Then(
    "the response in the item {int} should have the body",
      async function (position, object)
      {
        spec.response().should.have.jsonLike(`$[{position}]`, //to get exact json
        JSON.parse(object));
      }
);