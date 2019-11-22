import test from "ava";
import request from "supertest";
import app from "../app";

test("Create Visitor", async t => {
  t.plan(3);
  const visitorCreate = {
    name: "Lena",
    mood: "joyfull",
    walkpaths: []
  };

  const res = await request(app)
    .post("/visitor")
    .send(visitorCreate);

  t.is(res.status, 200);

  t.is(res.body.name, visitorCreate.name);
  t.is(res.body.mood, visitorCreate.mood);
});

test("Fetch a visitor", async t => {
  t.plan(3);
  const visitorCreate = {
    name: "Dana",
    mood: "funky",
    walkpaths: []
  };

  // create visitor
  const danaVisitorCreated = (
    await request(app)
      .post("/visitor")
      .send(visitorCreate)
  ).body;

  // fetch visitor
  const fetchRes = await request(app).get(`/visitor/${danaVisitorCreated._id}`);
  t.is(fetchRes.status, 200);

  const fetchResJason = await request(app).get(
    `/visitor/${danaVisitorCreated._id}/json`
  );
  // checking server respins status success
  t.is(fetchResJason.status, 200);

  // JSON endpoint - compare fetched with created
  const danaVisitorFetched = fetchRes.fetchResJason.body;
  t.deepEqual(danaVisitorFetched, danaVisitorCreated);
});

test("Delete a visitor", async t => {
  t.plan(4);

  //create
  const visitorCreate = { name: "Lina", mood: "lolly", walkpaths: [] };
  const linaVisitorCreate = (
    await request(app)
      .post("/visitor")
      .send(visitorCreate)
  ).body;

  // delete
  const deleteRes = await request(app).delete(
    `/visitor/${linaVisitorCreate._id}`
  );
  t.is(fetch.status, 404);

  // fetch JSON data of deleted
  const fetchJson = await request(app).get(
    `/visitot/${linaVisitorCreated._id}/json`
  );
  // checking for server response status - page not found 404
  t.is(fetchJson.status, 404);
});
