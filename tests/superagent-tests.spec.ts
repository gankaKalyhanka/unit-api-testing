import superagent from "superagent"
import { expect } from "chai"
//import assert from "assert"

describe("Make API request", () => {
  it("get single user", async () => {
    const res = await superagent.get("https://reqres.in/api/users/2")
    expect(res.status).equal(200)
  })

  it("get users", async () => {
    const res = await superagent.get("https://reqres.in/api/users?page=2")
    expect(res.status).equal(200)
  })

  it("get resourse", async () => {
    const res = await superagent.get("https://reqres.in/api/unknown")
    expect(res.status).equal(200)
  })

  it("get single resourse", async () => {
    const res = await superagent.get("https://reqres.in/api/unknown/2")
    expect(res.status).equal(200)
  })

  it("create user", async () => {
    const res = await await superagent
      .post("https://reqres.in/api/users")
      .set("Content-Type", "application/json")
      .send({
        name: "morpheus",
        job: "leader",
      })
    expect(res.status).equal(201)
    expect(res.body.name).equal("morpheus")
    expect(res.body.job).equal("leader")
  })

  it("update user", async () => {
    const res = await await superagent
      .put("https://reqres.in/api/users/2")
      .set("Content-Type", "application/json")
      .send({
        name: "morpheus",
        job: "zion resident",
      })
    expect(res.status).equal(200)
    expect(res.body.name).equal("morpheus")
    expect(res.body.job).equal("zion resident")
  })

  it("update user with patch", async () => {
    const res = await await superagent
      .patch("https://reqres.in/api/users/2")
      .set("Content-Type", "application/json")
      .send({
        job: "zion resident",
      })
    expect(res.status).equal(200)
    expect(res.body.job).equal("zion resident")
  })

  it("delete user", async () => {
    const res = await superagent.delete("https://reqres.in/api/users/2")
    expect(res.status).equal(204)
  })

  it("register", async () => {
    const res = await await superagent
      .post("https://reqres.in/api/register")
      .set("Content-Type", "application/json")
      .send({
        email: "eve.holt@reqres.in",
        password: "pistol"
    })
    expect(res.status).equal(200)
  
  })


  it("login", async () => {
    const res = await await superagent
      .post("https://reqres.in/api/login")
      .set("Content-Type", "application/json")
      .send({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    })
    expect(res.status).equal(200)
  
  })
})
