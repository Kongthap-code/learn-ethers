import { Route, Switch } from "wouter";
import Landing from "./views/Landing";

function Router() {
    return (
        // <Switch>
            <Route path="/" component={Landing} />
        // </Switch>
    )
}

export default Router