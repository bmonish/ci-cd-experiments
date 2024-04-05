import express from "express";
import os from "os";

const app = express();

app.get("/status", (req, res) => {
  console.log("Cart MS Status Endpoint");
  res.json({
    message: "Status returning from cart ms",
    node: process.version,
    os: process.platform,
    host: os.hostname(),
  });
});

app.listen(3000, () => {
  console.log("Cart Ms started on Port 3000");
});
