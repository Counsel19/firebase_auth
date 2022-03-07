import { Signup, Dashboard, Login, ForgotPassword, UpdateProfile } from "./components";
import { Container } from "react-bootstrap";
import { AuthContenxtProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthContenxtProvider>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/update-profile" element ={<UpdateProfile/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element ={<ForgotPassword />} />
              
            </Routes>
          </AuthContenxtProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
