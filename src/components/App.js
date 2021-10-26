import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
                <Route exact path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
