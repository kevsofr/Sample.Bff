import React from "react";
import { Provider } from "react-redux";
import { HistoryRouter } from "redux-first-history/rr6";
import { store, history } from "./store";
import MainPage from "./components/MainPage";

function App() {
    return (
        <Provider store={store}>
            <HistoryRouter history={history}>
                <MainPage />
            </HistoryRouter>
        </Provider>
    );
}

export default App;