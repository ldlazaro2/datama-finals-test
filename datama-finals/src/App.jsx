import React, { useState } from "react";
import "./App.css"; // Ensure you have this CSS file for styling

const App = () => {
  const [showCustomerPage, setShowCustomerPage] = useState(false);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home" onClick={() => setShowCustomerPage(false)}>
            <b>Shell</b> Employee Portal
          </a>
        </div>
        <div className="navbar-right">
          <a href="#customer" onClick={() => setShowCustomerPage(true)}>
            Customer Page
          </a>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <img
          src="https://i.pinimg.com/736x/1c/77/a6/1c77a66033942e5f45f3172ff1cfd4eb.jpg"
          alt="Shell Logo"
          className="logo"
        />
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Employee Login Section */}
        {!showCustomerPage && (
          <div className="login-section">
            <h2>Employee Login</h2>
            <form>
              <input type="text" placeholder="Employee ID" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {/* Customer Page Section */}
        {showCustomerPage && (
          <div className="customer-section">
            <h2>Customer Page</h2>
            <p>Check out our latest gas prices in Philippine Peso (PHP):</p>
            <div className="price-cards">
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Unleaded" />
                <p>Unleaded: ₱50.00</p>
              </div>
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Diesel" />
                <p>Diesel: ₱45.00</p>
              </div>
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Premium" />
                <p>Premium: ₱55.00</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Shell Employee Portal | Powered by Shell</p>
      </footer>
    </div>
  );
};

export default App;