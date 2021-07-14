const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { Price } = require('../Models/Price');
chai.use(chaiHttp); // associate the module with chai!
const app = require('../index')

describe(`Hello route`, () => {

    it(`Should return movie title when /movie are accessed`, (done) => {
        chai.request(app)
            .get("/price")
            .end((error, response) => {
                if (error) {
                    console.log(`Something went wrong!`);
                    done(error);
                }
                expect(response).to.have.status(201);
                expect(response).to.not.be.null;
                response.body.map(item => {
                    expect(item).to.be.a("Object");
                })
                done();
            });
    });

});
