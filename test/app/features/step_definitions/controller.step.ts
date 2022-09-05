import { assert } from 'chai';
import request from 'supertest';
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import { Run } from '../../../../src/app/server/Run';

let _request: request.Test;
let _response: request.Response;
let application: Run;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Given('I send a PUT request to {string} with body:', (route: string, body: any) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Given('I send a DELETE request to {string}', (route: string) => {
  _request = request(application.httpServer).delete(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response content should be:', (response) => {
  assert.deepEqual(_response.body, JSON.parse(response));
});

BeforeAll(async () => {
  application = new Run();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
