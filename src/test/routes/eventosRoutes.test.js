/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import app from '../../app.js';
import EventosController from '../../controllers/eventosController.js';

chai.use(chaiHttp);
const { expect } = chai;
let stub;

describe('GET em eventos', () => {
  it('Deve retornar uma lista de eventos', (done) => {
    stub = sinon.stub(EventosController, 'liberaAcessoEvento').returns(true);
    chai.request(app)
      .get('/eventos')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('id');
        expect(res.body[0]).to.have.property('nome');
        expect(res.body[0]).to.have.property('descricao');
        expect(res.body[0]).to.have.property('autor_id');
        done();
      });
  });

  it('Deve retornar erro 404', (done) => {
    stub.restore();
    stub = sinon.stub(EventosController, 'liberaAcessoEvento').returns(false);
    chai.request(app)
      .get('/eventos')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });
});
