import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function AdminLogin(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prevent default form submission

    const correctUsername = "admin@gmail.com";
    const correctPassword = "admin@123";

    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      setErrorMessage(""); // Clear any previous error messages
    } else {
      setIsLoggedIn(false);
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };
  return (
    <>
      <div
        className="container 
 mt-5"
      >
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                {isLoggedIn ? (
                  <h5 className="card-title text-center">Login Successful!</h5>
                ) : (
                  <h5 className="card-title text-center">Login</h5>
                )}

                <form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username</Form.Label>
                    <Form.Control
                      type="email"
                      id="username"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    {" "}
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" disabled={isLoggedIn}>
                    {isLoggedIn ? "Logged In" : "Login"}
                  </Button>

                  {errorMessage && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {errorMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
