import { useEffect, useState } from "react";
import { fetchLeads } from "../services/api";
import LeadDetails from "./LeadDetails";

const LeadsTable = () => {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [stage, setStage] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    loadLeads();
  }, [page, search, status, stage]);

  const loadLeads = async () => {
    const res = await fetchLeads({
      page,
      limit: 10,
      search,
      status,
      stage
    });

    setLeads(res.data.leads);
    setTotalPages(res.data.totalPages);
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h2>Leads</h2>

      {/* 🔍 Search */}
      <input
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
        style={{ padding: 8, width: 250, marginBottom: 10 }}
      />

      {/* 🎯 Filters */}
      <div style={{ marginBottom: 15 }}>
        <select
          value={status}
          onChange={(e) => {
            setPage(1);
            setStatus(e.target.value);
          }}
          style={{ marginRight: 10, padding: 6 }}
        >
          <option value="">All Status</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Converted">Converted</option>
        </select>

        <select
          value={stage}
          onChange={(e) => {
            setPage(1);
            setStage(e.target.value);
          }}
          style={{ padding: 6 }}
        >
          <option value="">All Stages</option>
          <option value="Cold">Cold</option>
          <option value="Warm">Warm</option>
          <option value="Hot">Hot</option>
        </select>
      </div>

      {/* 📋 Table */}
      <div style={{ overflowX: "auto" }}>
        <table width="100%" border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Stage</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead._id}
                onClick={() => setSelectedLead(lead)}
                style={{ cursor: "pointer" }}
              >
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.status}</td>
                <td>{lead.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📄 Pagination */}
      <div style={{ marginTop: 15 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>

      {/* 🔍 Lead Details */}
      <LeadDetails
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
      />
    </div>
  );
};

export default LeadsTable;
