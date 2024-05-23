/* eslint-disable no-unused-expressions */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('GET em eventos', () => {
  it('Deve retornar uma lista de eventos', (done) => {
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
});
