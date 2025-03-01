import React, { useState } from "react";
import "./App.css"; // Ensure you have this CSS file for styling

const App = () => {
  // State to manage which page is displayed
  const [showCustomerPage, setShowCustomerPage] = useState(false);

  return (
    <div className="app-container">
      {/* Navbar */}
      <div className="w3-top">
        <div className="w3-bar w3-card">
          <a
            href="#home"
            className="w3-bar-item w3-button"
            onClick={() => setShowCustomerPage(false)} // Show Employee Login
          >
            <b>Shell</b> Employee Portal
          </a>
          <a
            href="#customer"
            className="w3-bar-item w3-button"
            onClick={() => setShowCustomerPage(true)} // Show Customer Page
          >
            Customer Page
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <img
          className="w3-image"
          src="https://i.pinimg.com/736x/1c/77/a6/1c77a66033942e5f45f3172ff1cfd4eb.jpg"
          alt="Shell"
          width="200"
        />
      </header>

      {/* Page Content */}
      <div className="content">
        {/* Employee Login Section */}
        {!showCustomerPage && (
          <div className="employee-login">
            <div className="login-container">
              <h3>Employee Login</h3>
              <form action="#" method="POST">
                <input className="w3-input w3-border" type="text" placeholder="Employee ID" required />
                <input className="w3-input w3-border w3-margin-top" type="password" placeholder="Password" required />
                <button className="w3-button shell-red w3-margin-top" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Customer Section */}
        {showCustomerPage && (
          <div className="customer-page">
            <h2>Customer Page</h2>
            <p>Check out our latest gas prices in Philippine Peso (PHP):</p>

            <div className="gas-price-grid">
              <div className="gas-price-card">
                <img src="https://via.placeholder.com/100" alt="Unleaded" />
                <p className="gas-price">Unleaded: ₱50.00</p>
              </div>
              <div className="gas-price-card">
                <img src="https://via.placeholder.com/100" alt="Diesel" />
                <p className="gas-price">Diesel: ₱45.00</p>
              </div>
              <div className="gas-price-card">
                <img src="https://via.placeholder.com/100" alt="Premium" />
                <p className="gas-price">Premium: ₱55.00</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Shell Employee Portal | Powered by Shell</p>
      </footer>
    </div>
  );
};

export default App;