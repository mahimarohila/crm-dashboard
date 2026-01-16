const Lead = require("../models/Lead");

// GET /api/leads
// search, filter, sort, paginate
exports.getLeads = async (req, res) => {
  try {
    const {
      search,
      status,
      stage,
      sort = "createdAt",
      page = 1,
      limit = 10
    } = req.query;

    const query = {};

    // 🔍 Search by name or email
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } }
      ];
    }

    // 🎯 Filters
    if (status) query.status = status;
    if (stage) query.stage = stage;

    const skip = (page - 1) * limit;

    const leads = await Lead.find(query)
      .sort({ [sort]: -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Lead.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      totalPages: Math.ceil(total / limit),
      leads
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/leads/:id
exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// GET /api/leads/analytics
exports.getLeadAnalytics = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments();
    const convertedLeads = await Lead.countDocuments({ status: "Converted" });

    const leadsByStage = await Lead.aggregate([
      { $group: { _id: "$stage", count: { $sum: 1 } } }
    ]);

    res.json({
      totalLeads,
      convertedLeads,
      leadsByStage
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
