import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "react-error-boundary";
import { Col, Container, Row } from "react-bootstrap";
import { log } from "./api/managementApi";

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

const logError: any = (error: Error) => log(error);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    // <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender} onError={logError}>
        <App />
    </ErrorBoundary>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
