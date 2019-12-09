const chai = require("chai");
const should = chai.should();
const Users = require("../../../app/controllers/users");

describe("Users test suite", function() {
  context("Date and Time concatinator", function() {
    it("should return fname and lname concatinated with space in between", function() {
      const fname = "Guillaume";
      const lname = "Sayinzoga";
      Users.concatnames(fname, lname).should.equal("Guillaume Sayinzoga");
    });
    it("should return null when there are no firstname and lastname provided", function() {
      const fname = null;
      const lname = null;
      should.not.exist(Users.concatnames(fname, lname));
    });
  });
});
