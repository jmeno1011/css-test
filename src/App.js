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
        <Link to="/grid-box" className="nav__link">
          GridBox
        </Link>
        <Link to="/action-menu" className="nav__link">
          ActionMenu
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
