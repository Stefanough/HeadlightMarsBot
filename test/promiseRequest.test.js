const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');
const { promiseRequest } = require('../promiseRequest');
const register = require('./fixtures/register');

const dummyEndPoint = '/dummy';

describe('promiseRequest', () => {
  afterEach(() => {
    request.post.restore();
  });

  it('should return a promise that resolves to an object', async () => {
    request.post = sinon.stub(request, 'post');
    request.post.yields(null, register.success.res, JSON.stringify(register.success.body));
    const p = await promiseRequest(dummyEndPoint);
    expect(JSON.stringify(p)).to.equal(JSON.stringify(register.success.body));
  });

  it('should reject on an error', () => {
    request.post = sinon.stub(request, 'post');
    request.post.yields('request.post has encountered an error!', null, null);
    promiseRequest(dummyEndPoint).catch((err) => {
      expect(err).to.equal('request.post has encountered an error!');
    });
  });
});
