import express from "express";
import os from "os";

const app = express();

app.get("/status", (req, res) => {
  console.log("User MS Status Endpoint");
  res.json({
    message: "Status returning from User ms",
    node: process.version,
    os: process.platform,
    host: os.hostname(),
  });
});

app.listen(3000, () => {
  console.log("User MS started on Port 3000");
});
