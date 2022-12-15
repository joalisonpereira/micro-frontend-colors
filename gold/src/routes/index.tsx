import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRouter basename="gold">
      <Switch>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<div>Not found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
