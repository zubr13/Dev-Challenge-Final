'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var flowCtrlStub = {
  index: 'flowCtrl.index',
  show: 'flowCtrl.show',
  create: 'flowCtrl.create',
  upsert: 'flowCtrl.upsert',
  patch: 'flowCtrl.patch',
  destroy: 'flowCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var flowIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './flow.controller': flowCtrlStub
});

describe('Flow API Router:', function() {
  it('should return an express router instance', function() {
    flowIndex.should.equal(routerStub);
  });

  describe('GET /api/flows', function() {
    it('should route to flow.controller.index', function() {
      routerStub.get
        .withArgs('/', 'flowCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/flows/:id', function() {
    it('should route to flow.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'flowCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/flows', function() {
    it('should route to flow.controller.create', function() {
      routerStub.post
        .withArgs('/', 'flowCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/flows/:id', function() {
    it('should route to flow.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'flowCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/flows/:id', function() {
    it('should route to flow.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'flowCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/flows/:id', function() {
    it('should route to flow.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'flowCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
