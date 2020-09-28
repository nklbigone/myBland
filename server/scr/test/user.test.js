import chai from "chai";
import chaihttp from "chai-http";
import server from "../../server";
import { describe, it, beforeEach ,afterEach} from "mocha";
import jwt from "jsonwebtoken";
import User from '../models/User'

//

const expect = chai.expect;

chai.use(chaihttp);

//delete befor each
 const token = jwt.sign(
   { name: "welcome", id: "fast", mail: "now" },
   process.env.JWT_SECRET
 );
//  const blog = {
//    name: "alexisikitta",
//    email: "alexikit4@gmail.com",
//    password: "123456",
//  };

//   beforeEach(async () => {
//     await User.deleteMany({});
//     await Blob(blog).save().set("authorization", `Bearer ${token}`);
//   });

describe(" blog API", () => {
  // Test get routes
   after(async()=> {
    await User.deleteMany({});
  })

  describe(" POST /user/", () => {
    // it("It should POST  one user", (done) => {
    //   const blog = {
    //     name: "alexisikitta",
    //     email: "alexikit4@gmail.com",
    //     password: "123456",
    //   };
    //   chai
    //     .request(server)
    //     .post("/users/register/")
    //     .send(blog)
    //     .set("authorization", `Bearer ${token}`)
    //     .end((err, response) => {
    //       expect(response).to.have.status(201);
    //       expect(response.body).to.be.a("object");
    //       done();
    //     });
    // });

    it("It should not POST any user", (done) => {
      chai
        .request(server)
        .post("/users/25435")
        .end((err, response) => {
          expect(response).to.have.status(404);
          done();
        });
    });
  });

    describe(" POST /user/", () => {
       let userCreation = {
        name: "alexis",
        email: "alexis@gmail.com",
        password: "$2a$10$FdE/ppeGOAYpjvmNpqAaCezAPuN3.EniHa4edT43Q4wHkClXrUNui",
 };
      it("It should login  user", async () => {
        const user = await User.create(userCreation)
        await user.save()
        const blog = {
          email: "alexis@gmail.com",
          password: "123456",
        };
         const response  = await chai
          .request(server)
          .post("/users/login/")
          .send(blog)
            expect(response).to.have.status(200);
            expect(response.body).to.be.a("object");
          });
      

      it("It should not login any user", (done) => {
        chai
          .request(server)
          .post("/login/25435")
          .end((err, response) => {
            expect(response).to.have.status(404);
            done();
          });
      });
    });

     describe("  /users/logout/", () => {
       it("It should logout  user", (done) => {
         chai
           .request(server)
           .get("/users/logout")
           .set("authorization", `Bearer ${token}`)
           .end((err, response) => {
             expect(response).to.have.status(200);
             expect(response.body).to.be.a("object");
             done();
           });
       });

       it("It should not logout  user", (done) => {
         chai
           .request(server)
           .get("/users/logoutt")
           .set("authorization", `Bearer ${token}`)
           .end((err, response) => {
             expect(response).to.have.status(404);
             expect(response.body).to.be.a("object");
             done();
           });
       });

     });

});
