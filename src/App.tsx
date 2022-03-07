import { Provider } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { store } from "./app/store";

function App() {
  const navStyle = {
    padding: "20px"
  };

  const linkStyle = {
    color: "red",
    textDecoration: "none"
  };

  return (
    <div className="App">
      <Provider store={store}>
        <nav style={navStyle}>
          <Link to="/rooms" style={linkStyle}>Rooms</Link>
        </nav>
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
