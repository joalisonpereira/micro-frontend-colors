import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRouter basename="gold">
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
