import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchLeads = (params) =>
  api.get("/leads", { params });

export const fetchLeadById = (id) =>
  api.get(`/leads/${id}`);

export const fetchAnalytics = () =>
  api.get("/leads/analytics");
