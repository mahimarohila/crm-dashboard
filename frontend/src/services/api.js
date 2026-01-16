import axios from "axios";

const api = axios.create({
  baseURL: "https://crm-dashboard-9ns3.onrender.com/api"
});

export const fetchLeads = (params) =>
  api.get("/leads", { params });

export const fetchLeadById = (id) =>
  api.get(`/leads/${id}`);

export const fetchAnalytics = () =>
  api.get("/leads/analytics");
