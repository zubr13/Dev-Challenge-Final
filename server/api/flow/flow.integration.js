'use strict';

var app = require('../..');
import request from 'supertest';

var newFlow;

describe('Flow API:', function() {
  describe('GET /api/flows', function() {
    var flows;

    beforeEach(function(done) {
      request(app)
        .get('/api/flows')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          flows = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      flows.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/flows', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/flows')
        .send({
          name: 'New Flow',
          info: 'This is the brand new flow!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newFlow = res.body;
          done();
        });
    });

    it('should respond with the newly created flow', function() {
      newFlow.name.should.equal('New Flow');
      newFlow.info.should.equal('This is the brand new flow!!!');
    });
  });

  describe('GET /api/flows/:id', function() {
    var flow;

    beforeEach(function(done) {
      request(app)
        .get(`/api/flows/${newFlow._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          flow = res.body;
          done();
        });
    });

    afterEach(function() {
      flow = {};
    });

    it('should respond with the requested flow', function() {
      flow.name.should.equal('New Flow');
      flow.info.should.equal('This is the brand new flow!!!');
    });
  });

  describe('PUT /api/flows/:id', function() {
    var updatedFlow;

    beforeEach(function(done) {
      request(app)
        .put(`/api/flows/${newFlow._id}`)
        .send({
          name: 'Updated Flow',
          info: 'This is the updated flow!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedFlow = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFlow = {};
    });

    it('should respond with the original flow', function() {
      updatedFlow.name.should.equal('New Flow');
      updatedFlow.info.should.equal('This is the brand new flow!!!');
    });

    it('should respond with the updated flow on a subsequent GET', function(done) {
      request(app)
        .get(`/api/flows/${newFlow._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let flow = res.body;

          flow.name.should.equal('Updated Flow');
          flow.info.should.equal('This is the updated flow!!!');

          done();
        });
    });
  });

  describe('PATCH /api/flows/:id', function() {
    var patchedFlow;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/flows/${newFlow._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Flow' },
          { op: 'replace', path: '/info', value: 'This is the patched flow!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedFlow = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedFlow = {};
    });

    it('should respond with the patched flow', function() {
      patchedFlow.name.should.equal('Patched Flow');
      patchedFlow.info.should.equal('This is the patched flow!!!');
    });
  });

  describe('DELETE /api/flows/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/flows/${newFlow._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when flow does not exist', function(done) {
      request(app)
        .delete(`/api/flows/${newFlow._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
