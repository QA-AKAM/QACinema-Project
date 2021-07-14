const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../Routes/MovieRoutes')

describe(`Testing all the movie routes`, () => {

    it(`Should return all the movies`, (done) => {

        //Arrange

        chai.request('localhost:5000')
            //Act
            .get("/movie")
            //Async function
            .end((error, response) => {
                if (error) {
                    done(error);
                }
                //Assert
                expect(response).to.have.status(200);
                expect(response.body).to.not.be.null;
                done()
            })
    })

    it(`it should respond with the object`, () => {

        //Arrange
        const movie = "test_movie"

        chai.request(app)
            .post("/movie")
            .send({

            })

    })



})