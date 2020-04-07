const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

/* -------------------------------------------------------------------------- */

app.get("/no-cors", (req, res) => {
    console.info("GET /no-cors");
    res.json({
      text: "You should not see this via a CORS request."
    });
  });

  /* -------------------------------------------------------------------------- */

  app.head("/", cors(), (req, res) => {
    console.info("HEAD /");
    res.sendStatus(204);
  });
  app.get("/", cors(), (req, res) => {
    console.info("GET / - simple-cors");
    res.json({
      text: "Simple CORS requests are working. [GET]"
    });
  });
  app.post("/", cors(), (req, res) => {
    console.info("POST / - simple-cors");
    res.json({
      text: "Simple CORS requests are working. [POST]"
    });
  });

  /* -------------------------------------------------------------------------- */

  app.options("/complex-cors", cors());
  app.delete("/complex-cors", cors(), (req, res) => {
    console.info("DELETE /complex-cors");
    res.json({
      text: "Complex CORS requests are working. [DELETE]"
    });
  });

  /* -------------------------------------------------------------------------- */


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
