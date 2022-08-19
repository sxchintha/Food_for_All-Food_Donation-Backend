const express = require("express");
const { createDonation } = require("../../controllers/donator/createDonation");

const {
  createOrganization,
} = require("../../controllers/organization/organization");

const router = express.Router();

router.post("/register", createOrganization);
router.post("/upload", createDonation);

module.exports = router;