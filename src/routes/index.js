const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ title: "hello world" });
});

router.get("/test", (req, res) => {
  const data = {
    name: "Juanje",
    website: "juanje.com"
  };

  res.json(data);
});

module.exports = router;
