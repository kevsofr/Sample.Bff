import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Col, Container, Row } from "react-bootstrap";
import { store } from "./store";
import MainPage from "./components/MainPage";
import { useLogMutation } from "./services/logApi";

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

const AppWithErrorBoundary: React.FC = () => {
    const [log] = useLogMutation();
    const logError = (error: Error) => log(error);

    return <ErrorBoundary fallbackRender={fallbackRender} onError={logError}>
        <MainPage />
    </ErrorBoundary>;
};

const App: React.FC = () =>
    <Provider store={store}>
        <BrowserRouter>
            <AppWithErrorBoundary />
        </BrowserRouter>
    </Provider>;

export default App;