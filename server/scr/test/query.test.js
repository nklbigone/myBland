

import chai from 'chai'
import chaihttp from 'chai-http'
import server from '../../server'
import { describe, it, beforeEach } from 'mocha'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

//
dotenv.config()
chai.should();

chai.use(chaihttp);

describe(" Query API", () => {
  // Test get routes
 const token = jwt.sign( {name: "welcome", id: "fast", mail: "now"},process.env.JWT_SECRET)
  describe(" GET /queries/", () => {
    it.skip("It should GET all the queries", (done) => {
      chai
        .request(server)
        .get("/queries/")
        .set("authorization")
        .end((err, response) => {
          console.log(response.body)
          response.should.have.status(200);
          response.body.should.be.a("array");
          done();
        });
    });

        it("It should not GET all the queries", (done) => {
          chai
            .request(server)
            .get("/querie/")
            .end((err, response) => {
              response.should.have.status(404);
              done();
            });
        });
      });

        describe(" POST /query/", () => {
          it("It should POST  one query", (done) => {
            const blog = {
              name: "one",
              email: "one@gmail.com",
            };
            chai
              .request(server)
              .post("/queries/")
              .send(blog)
              .set("authorization", `Bearer ${token}`)
              .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a("object");
                done();
              });
          });

          it("It should not POST any query", (done) => {
            chai
              .request(server)
              .post("/query/")
              .end((err, response) => {
                response.should.have.status(404);
                done();
              });
          });
        });

  });