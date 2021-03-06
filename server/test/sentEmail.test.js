import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../Server/app'

const { expect } = chai;
chai.use(chaiHttp)

describe('Sent-emails', () => {
    it('Get all sent emails', () => {
        chai.request(app)
          .get('/api/v1/messages/sent')
          .end((err, res) => {
              if(err){
                expect(res.body.status).to.be.equal(400)
                expect(res.body).to.be.an('object')
              }
          })
      })
    })