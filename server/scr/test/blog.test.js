import chai from "chai";
import chaihttp from "chai-http";
import server from "../../server";
import { describe, it, beforeEach } from "mocha";
import jwt from "jsonwebtoken";
import blog from '../models/Blog'
let ids;



const expect = chai.expect;

chai.use(chaihttp);

// delete data before

  const token = jwt.sign(
    { name: "welcome", id: "fast", mail: "now" },
    process.env.JWT_SECRET
  );

  
// beforeEach(async() => {
//   await blog.deleteMany({})
// })

describe(" blog API", () => {

  describe(" POST /blog/", () => {
    it("It should POST  one blog", (done) => {
      const blog = {
        title: "work night",
        blogDescription: "mine work",
        blogPicture: "newjhgfhg",
      };
      chai
        .request(server)
        .post("/blogs/")
        .set("authorization", `Bearer ${token}`)
        .set("Content-Type", "application/x-www-form-urlencoded")
        .field("title", blog.title)
        .field("blogDescription", blog.blogPicture)
        .attach("blogPicture", "/home/alexis/Pictures/alexis1.png")
        .end((err, response) => {
          ids = response.body._id;
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("object");
          done();
        });
    }).timeout(50000);

    it("It should not POST any blog", (done) => {
      chai
        .request(server)
        .post("/blogs/25435")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });
  });

  //Test get routes
  describe(" GET /blog/", () => {
    it("It should GET all the blog", (done) => {
      chai
        .request(server)
        .get("/blogs/")
        .set("authorization", `Bearer ${token}`)
        .end((err, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.a("array");
          done();
        });
    });

    it("It should not GET all the queries", (done) => {
      chai
        .request(server)
        .get("/blog/")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });  
  });

      describe(" GET /blog/", () => {
        it("It should GET  one blog", (done) => {
              chai
                .request(server)
                .get("/blogs/"+ ids)
                .set("authorization", `Bearer ${token}`)
                .end((err, response) => {
                  expect(response).to.have.status(200);
                  expect(response.body).to.be.a("object");
                  done();
                });
        });

        it("It should not GET any blog", (done) => {
          chai
            .request(server)
            .get("/blog/68696785995976")
            .end((err, response) => {
              expect(response).to.have.status(404);
              done();
            });
        });
      });

      

    describe(" PUT /blog/", () => {
      it("It should PUT  one blog", (done) => {
        const blog = {
          title: "work night changed",
        };
        chai
          .request(server)
          .put("/blogs/" + ids)
          .send(blog)
          .set("authorization", `Bearer ${token}`)
          .end((err, response) => {
            expect(response).to.have.status(404);
            expect(response.body).to.be.a("object");
            done();
          });
      });

      it("It should not put any blog", (done) => {
        chai
          .request(server)
          .put("/blogs/25435")
          .end((err, response) => {
            expect(response).to.have.status(404);
            done();
          });
      });
    });

    describe(" DELTE /blog/", () => {
      it("It should DELETE  one blog", (done) => {
        chai
          .request(server)
          .delete("/blogs/" + ids)
          .set("authorization", `Bearer ${token}`)
          .end((err, response) => {
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
            done();
          });
      });

    });
});
