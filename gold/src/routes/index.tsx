import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Routes() {
  return (
    <BrowserRouter basename="gold">
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
