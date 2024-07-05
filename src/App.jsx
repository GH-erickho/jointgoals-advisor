import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import EditProfile from "./components/EditProfile";
import Login from "./components/Login";

function RequireAuth({ children }) {
  const {
    pending,
    isSignedIn,
  } = useAuth();

  if (pending) {
    return <h1>waiting...</h1>;
  }
  if (!isSignedIn) {
    return <Login />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route />
            <Route
              path="/edit-profile/:precisefp_account_id"
              element={
                <RequireAuth>
                  <EditProfile />
                </RequireAuth>
              }
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
