const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../index')

describe(`Testing all the movie routes`, () => {

    it(`Should return all the movies`, (done) => {

        chai.request(app)
            .get("/movie")
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                response.body.map((movie) => {
                    expect(movie).to.be.a("object");
                    expect(movie).to.contain.keys("_id", "title", "actors");
                })
                done();
            })
    })

    it(`should respond with the objects which has the genre animation`, (done) => {

        chai.request(app)
            .get("/movie/search")
            .query({ s: 'animation' })
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response.body).to.have.lengthOf(2);
                response.body.map((movie) => {
                    expect(movie).to.be.a("object");
                })
                done();
            })
    })

    it(`should respond with movies that are released`, (done) => {

        chai.request(app)
            .get("/released/true")
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response.body).to.have.lengthOf(6);
                response.body.map((movie) => {
                    expect(movie).to.be.a("object");
                    expect(movie.released).to.be.true;
                })
                done();
            })
    })

    it(`should respond with movie by the ID`, (done) => {

        const movieID = "60e4200f7a5d6042284b2f65";

        chai.request(app)
            .get(`/movie/${movieID}`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response.body).to.be.a("object");
                expect(response.body.title).to.contain("Demon Slayer: Mugen Train");

                done();
            })
    })

    it(`should respond with movie does not exist`, (done) => {

        const movieID = "60e4200f7a5d6042284";

        chai.request(app)
            .get(`/movie/${movieID}`)
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                expect(response).to.have.status(404);
                expect(response).to.not.be.null;
                expect(response.body.error).to.contain("movie does not exist");
                done();
            })
    })



})