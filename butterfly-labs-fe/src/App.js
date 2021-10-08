import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CREATE_USER_PATH } from "./constants";
import { CreateView } from "./views/CreateView";
import { MainView } from "./views/MainView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={CREATE_USER_PATH} component={CreateView} exact/>
        <Route component={MainView} />
      </Switch>
    </Router>
  );
}

export default App;
