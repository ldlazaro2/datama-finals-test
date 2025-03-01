import React from "react";
import "./App.css"; // You can create a separate CSS file for styling

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="w3-top">
        <div className="w3-bar w3-card">
          <a href="#home" className="w3-bar-item w3-button">
            <b>Shell</b> Employee Portal
          </a>
          <a href="#customer" className="w3-bar-item w3-button">
            Customer Page
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: "1500px" }} id="home">
        <img
          className="w3-image"
          src="https://i.pinimg.com/736x/1c/77/a6/1c77a66033942e5f45f3172ff1cfd4eb.jpg"
          alt="Shell"
          width="200"
        />
      </header>

      {/* Page Content */}
      <div className="w3-content w3-padding content" style={{ maxWidth: "1200px" }}>
        {/* Employee Login Section */}
        <div className="w3-container w3-padding-32 w3-center" id="employee">
          <div className="login-container w3-padding">
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

        {/* Customer Section */}
        <div className="w3-container w3-padding-32 w3-center" id="customer" style={{ display: "none" }}>
          <h2>Customer Page</h2>
          <p>Check out our latest gas prices in Philippine Peso (PHP):</p>

          <div className="w3-row-padding w3-margin-top">
            <div className="w3-third">
              <div className="w3-card">
                <img src="https://via.placeholder.com/100" alt="Unleaded" />
                <div className="w3-container">
                  <p className="gas-price">Unleaded: ₱50.00</p>
                </div>
              </div>
            </div>
            <div className="w3-third">
              <div className="w3-card">
                <img src="https://via.placeholder.com/100" alt="Diesel" />
                <div className="w3-container">
                  <p className="gas-price">Diesel: ₱45.00</p>
                </div>
              </div>
            </div>
            <div className="w3-third">
              <div className="w3-card">
                <img src="https://via.placeholder.com/100" alt="Premium" />
                <div className="w3-container">
                  <p className="gas-price">Premium: ₱55.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-center w3-black w3-padding-16">
        <p>Shell Employee Portal | Powered by Shell</p>
      </footer>
    </div>
  );
};

export default App;
