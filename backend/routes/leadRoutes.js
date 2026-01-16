console.log("✅ leadRoutes loaded");

const express = require("express");
const router = express.Router();
const {
  getLeads,
  getLeadById,
  getLeadAnalytics
} = require("../controllers/leadController");

router.get("/analytics", getLeadAnalytics);
router.get("/", getLeads);
router.get("/:id", getLeadById);


module.exports = router;
