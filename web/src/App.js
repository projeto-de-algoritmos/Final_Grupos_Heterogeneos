import Form from "./views/Form";
import Group from "./views/Groups";
import GroupView from "./components/GroupView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Form />}>
          {/* <Route path=":login" exact element={<Form />} />
          <Route path=":login/:type" exact element={<Form />} /> */}
        </Route>
        <Route path="/groups" exact element={<Group />}>
          {/* <Route path=":login/:type" exact element={<Group />} /> */}
        </Route>
        <Route path="/view" exact element={<GroupView />}>
          {/* <Route path=":login/:type" exact element={<Group />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
