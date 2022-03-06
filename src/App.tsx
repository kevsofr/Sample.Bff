import { Provider } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { store } from "./app/store";

function App() {
  return (
    <div className="App">
      <Provider store={store()}>
        <nav>
          <Link to="/rooms">Rooms</Link>
        </nav>
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
