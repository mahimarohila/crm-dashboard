const LeadDetails = ({ lead, onClose }) => {
  if (!lead) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>Lead Details</h3>

        <p><b>Name:</b> {lead.name}</p>
        <p><b>Email:</b> {lead.email}</p>
        <p><b>Phone:</b> {lead.phone}</p>
        <p><b>Status:</b> {lead.status}</p>
        <p><b>Stage:</b> {lead.stage}</p>
        <p><b>Source:</b> {lead.source}</p>

        <button onClick={onClose} style={{ marginTop: 10 }}>
          Close
        </button>
      </div>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "#1f1f1f",
  padding: 20,
  borderRadius: 8,
  color: "#fff",
  minWidth: 300
};

export default LeadDetails;
