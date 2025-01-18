import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";
import { ErrorBoundary } from "react-error-boundary";
import { Col, Container, Row } from "react-bootstrap";
import { log } from "./api/managementApi";
import { store, history } from "./store";
import MainPage from "./components/MainPage";

const fallbackRender = () =>
    <Container className="small">
        <Row>
            <Col md={12}>
                <div className="text-center my-5">
                    <h2>Something went really wrong...</h2>
                </div>
            </Col>
        </Row>
    </Container>;

const logError = (error: Error) => log(error);

const App: React.FC = () =>
    <ErrorBoundary fallbackRender={fallbackRender} onError={logError}>
        <Provider store={store}>
            <BrowserRouter>
                <HistoryRouter history={history}>
                    <MainPage />
                </HistoryRouter>
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>;

export default App;