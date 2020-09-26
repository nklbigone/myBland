import chai from "chai";
import chaihttp from "chai-http";
import server from "../../server";
import { describe, it, beforeEach } from "mocha";
import jwt from "jsonwebtoken";

//

const expect = chai.expect;

chai.use(chaihttp);

 const token = jwt.sign(
   { name: "welcome", id: "fast", mail: "now" },
   process.env.JWT_SECRET
 );

describe(" article API", () => {
  // Test get routes
  describe(" POST /article/", () => {
    it("It should POST  one article", (done) => {
      const blog = {
        title: "work night",
        description: "mine work",
        picture: "newjhgfhg",
      };
      chai
        .request(server)
        .post("/articles/")
        .send(blog)
        .set("authorization", `Bearer ${token}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("object");
          done();
        });
    });

    it("It should not POST any blog", (done) => {
      chai
        .request(server)
        .post("/article/25435")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });
  });

  describe(" GET /article/", () => {
    it("It should GET all the articles", (done) => {
      chai
        .request(server)
        .get("/articles/")
        .set("authorization", `Bearer ${token}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("array");
          done();
        });
    });

    it("It should not GET all the article", (done) => {
      chai
        .request(server)
        .get("/article/")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });
  });

});

