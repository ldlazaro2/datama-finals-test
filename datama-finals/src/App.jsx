import React from "react";

function App() {
  return (
    <div style={{
      width: "100vw", height: "100vh", display: "flex", flexDirection: "column"
    }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: "#2563eb", padding: "16px", color: "white",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Shell Gas Station Co.</h1>
        <div>
          <button style={navButtonStyle}>Home</button>
          <button style={navButtonStyle}>Services</button>
          <button style={navButtonStyle}>Contact</button>
        </div>
      </nav>

      {/* Main Content (Hero + Services) */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", backgroundColor: "#3b82f6", color: "white", textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>Welcome to Shell Gas Station</h2>
        <p style={{ fontSize: "18px", marginTop: "8px" }}>Providing high-quality fuel and services for your journey.</p>
        <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
          <button style={serviceButtonStyle("green")}>Buy Fuel</button>
          <button style={serviceButtonStyle("orange")}>Check Prices</button>
          <button style={serviceButtonStyle("red")}>Contact Support</button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#1f2937", color: "white", textAlign: "center",
        padding: "16px"
      }}>
        <p>&copy; 2025 Gas Station Co. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles
const navButtonStyle = {
  margin: "0 12px", background: "none", border: "none", color: "white",
  cursor: "pointer", fontSize: "18px"
};

const serviceButtonStyle = (color) => ({
  backgroundColor: color === "green" ? "#10b981" : color === "orange" ? "#f59e0b" : "#ef4444",
  color: "white", padding: "14px 24px", borderRadius: "8px", border: "none",
  cursor: "pointer", fontSize: "18px", fontWeight: "bold"
});

export default App;
