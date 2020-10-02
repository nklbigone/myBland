import chai from "chai";
import chaihttp from "chai-http";
import server from "../server";
import { describe, it, beforeEach } from "mocha";
import jwt from "jsonwebtoken";

//

const expect = chai.expect;

chai.use(chaihttp);

describe(" blog API", () => {
  // Test get routes
  const token = jwt.sign(
    { name: "welcome", id: "fast", mail: "now" },
    process.env.JWT_SECRET
  );
  describe(" GET /contact/", () => {
    it("It should GET all the contact", (done) => {
      chai
        .request(server)
        .get("/contacts/")
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
        .get("/contact/")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });
  });

  describe(" POST /contact/", () => {
    it("It should POST  one contact", (done) => {
      const blog = {
        title: "Contact me",
        message: "contact me when you get",
      };
      chai
        .request(server)
        .post("/contacts/")
        .send(blog)
        .set("authorization", `Bearer ${token}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("object");
          done();
        });
    });

    it("It should not POST any contact", (done) => {
      chai
        .request(server)
        .post("/contact/25435")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });
  });
});
