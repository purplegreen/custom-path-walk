import test from "ava";
import request from "supertest";
import app from "../app";

test("Create Visitor", async t => {
  t.plan(3);
  const visitorCreate = {
    name: "Lena",
    mood: "joyfull"
  };

  const res = await request(app)
    .post("/visitor")
    .send(visitorCreate);

  t.is(res.status, 200);
  t.is(res.body.name, visitorCreate.name);
  t.is(res.body.mood, visitorCreate.mood);
});
