import "./assets/css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./components/contexts/Store";
import MainRouter from "./components/routing/routers/MainRouter";

function App() {
    return (
        <>
            <Router>
                <Store>
                    <MainRouter />
                </Store>
            </Router>
        </>
    );
}

export default App;
