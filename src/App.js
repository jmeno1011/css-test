import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="title">CSS Layout Master </h1>
      <nav className="nav">
        <Link to="/flex-box" className="nav__link">
          FlexBox
        </Link>
        <Link to="/" className="nav__link">
          Posts
        </Link>
        <Link to="/" className="nav__link">
          Settings
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
