// @flow

import type { $Request, $Response } from "express";

const express = require("express");

function createDiscoveryRouter(discoveryOptions: Object) {
  const router = express.Router();
  router.get("/*", (req: $Request, res: $Response) => {
    // TODO:
    const data = {};
    res.json(data);
  });
  return router;
}

module.exports = {
  createDiscoveryRouter
};
