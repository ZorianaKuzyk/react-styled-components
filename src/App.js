import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./styledComponents/signIn/signIn";
import SignUp from "./styledComponents/signUp/signUp";

function App() {
  return (
    <div>
      <nav>
        <ul className="navigation">
          <li>
            <Link className="navigation__button" to="/signin">
              {" "}
              Sign In
            </Link>
          </li>
          <li>
            <Link className="navigation__button" to="/signup">
              {" "}
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}
export default App;
